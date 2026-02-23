import type { VercelRequest, VercelResponse } from "@vercel/node";

const GITHUB_TOKEN  = process.env.GITHUB_TOKEN;
const GITHUB_REPO   = process.env.GITHUB_REPO || "Jumendess/iebam-welcome-page";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";
const ADMIN_PASSWORD = process.env.VITE_ADMIN_PASSWORD || "admin123";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Só aceita POST
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { password, content } = req.body;

  // Valida senha
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Senha incorreta" });
  }

  if (!GITHUB_TOKEN) {
    return res.status(500).json({ error: "GITHUB_TOKEN não configurado no Vercel" });
  }

  try {
    const filePath = "src/config/igreja.ts";
    const apiBase  = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`;

    // Pega o SHA atual do arquivo (necessário para atualizar)
    const getRes = await fetch(`${apiBase}?ref=${GITHUB_BRANCH}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (!getRes.ok) throw new Error("Erro ao buscar arquivo no GitHub");
    const { sha } = await getRes.json();

    // Converte conteúdo para base64
    const encoded = Buffer.from(content, "utf-8").toString("base64");

    // Faz o commit
    const putRes = await fetch(apiBase, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "✏️ Admin: atualização de conteúdo via painel",
        content: encoded,
        sha,
        branch: GITHUB_BRANCH,
      }),
    });

    if (!putRes.ok) {
      const err = await putRes.json();
      throw new Error(err.message || "Erro ao commitar");
    }

    return res.status(200).json({ ok: true, message: "Deploy iniciado com sucesso!" });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Erro desconhecido" });
  }
}
