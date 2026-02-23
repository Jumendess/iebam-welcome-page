import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CULTOS, VERSICULOS, AGENDA_ANUAL, NAVY, GOLD, SERIF,
  IGREJA_NOME_COMPLETO, IGREJA_SLOGAN,
} from "@/config/igreja";

// ── Senha — altere no .env: VITE_ADMIN_PASSWORD=suasenha ─────────
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";
const STORAGE_KEY = "iebam_admin_data";

// ── Tipos ─────────────────────────────────────────────────────────
type AdminData = {
  slogan: string;
  cultos: typeof CULTOS;
  versiculos: typeof VERSICULOS;
};

const defaultData: AdminData = {
  slogan: IGREJA_SLOGAN,
  cultos: CULTOS,
  versiculos: VERSICULOS,
};

function loadData(): AdminData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
  } catch {
    return defaultData;
  }
}

// ── Componentes de UI ─────────────────────────────────────────────
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-bold px-2 py-0.5 rounded-full"
    style={{ background: `${GOLD}25`, color: "#7a5a00" }}>
    {children}
  </span>
);

const Card = ({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
      <h2 className="font-bold text-base" style={{ color: NAVY, fontFamily: SERIF }}>{title}</h2>
      {badge && <Badge>{badge}</Badge>}
    </div>
    <div className="p-6">{children}</div>
  </div>
);

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className={`w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-yellow-400 transition-colors ${props.className ?? ""}`}
  />
);

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className={`w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-yellow-400 transition-colors resize-none ${props.className ?? ""}`}
  />
);

const Btn = ({ onClick, children, variant = "primary" }: {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "danger" | "ghost";
}) => {
  const styles = {
    primary: { background: GOLD, color: "white" },
    danger:  { background: "#dc2626", color: "white" },
    ghost:   { background: "#f3f4f6", color: NAVY },
  };
  return (
    <button onClick={onClick}
      className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:brightness-110"
      style={styles[variant]}>
      {children}
    </button>
  );
};

// ═══ LOGIN ════════════════════════════════════════════════════════
const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [show, setShow] = useState(false);

  const handleLogin = () => {
    if (senha === ADMIN_PASSWORD) {
      sessionStorage.setItem("iebam_admin_auth", "1");
      onLogin();
    } else {
      setErro(true);
      setSenha("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#f8f7f4" }}>
      <div className="w-full max-w-sm">
        {/* Logo / título */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md"
            style={{ background: NAVY }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
              className="w-8 h-8 text-white">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path strokeLinecap="round" d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold" style={{ color: NAVY, fontFamily: SERIF }}>
            Painel Admin
          </h1>
          <p className="text-gray-400 text-sm mt-1">{IGREJA_NOME_COMPLETO}</p>
        </div>

        {/* Card de login */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
              Senha
            </label>
            <div className="relative">
              <Input
                type={show ? "text" : "password"}
                placeholder="Digite a senha"
                value={senha}
                onChange={e => { setSenha(e.target.value); setErro(false); }}
                onKeyDown={e => e.key === "Enter" && handleLogin()}
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <path strokeLinecap="round" d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <path strokeLinecap="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            {erro && (
              <p className="text-red-500 text-xs mt-1">Senha incorreta. Tente novamente.</p>
            )}
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-2.5 rounded-lg font-bold text-sm text-white transition-all hover:brightness-110"
            style={{ background: NAVY }}
          >
            Entrar
          </button>
        </div>

        <p className="text-center text-xs text-gray-300 mt-6">
          Acesso restrito — IEBAM Admin
        </p>
      </div>
    </div>
  );
};

// ═══ PAINEL ADMIN ═════════════════════════════════════════════════
const AdminPanel = ({ onLogout }: { onLogout: () => void }) => {
  const [data, setData] = useState<AdminData>(loadData);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"geral" | "cultos" | "versiculos">("geral");

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const reset = () => {
    if (confirm("Resetar todas as alterações para os valores originais?")) {
      localStorage.removeItem(STORAGE_KEY);
      setData(defaultData);
    }
  };

  const tabs = [
    { key: "geral",      label: "Geral"     },
    { key: "cultos",     label: "Cultos"    },
    { key: "versiculos", label: "Versículos"},
  ] as const;

  return (
    <div className="min-h-screen" style={{ background: "#f8f7f4" }}>

      {/* ── HEADER ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: NAVY }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                className="w-4 h-4 text-white">
                <path strokeLinecap="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-sm" style={{ color: NAVY }}>Painel Admin</h1>
              <p className="text-xs text-gray-400">IEBAM</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/home"
              className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
              ← Ver site
            </Link>
            <button onClick={onLogout}
              className="text-xs px-3 py-1.5 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">

        {/* ── AVISO ── */}
        <div className="mb-6 p-4 rounded-xl border text-sm flex gap-3"
          style={{ background: `${GOLD}10`, borderColor: `${GOLD}40`, color: "#7a5a00" }}>
          <span className="text-lg">⚠️</span>
          <div>
            <strong>Modo de teste:</strong> As alterações são salvas localmente no navegador.
            Para tornar permanentes, edite o arquivo <code className="bg-white px-1 rounded text-xs">src/config/igreja.ts</code> com os valores finais.
          </div>
        </div>

        {/* ── TABS ── */}
        <div className="flex gap-1 mb-6 bg-white rounded-xl p-1 border border-gray-100 w-fit">
          {tabs.map(t => (
            <button key={t.key}
              onClick={() => setActiveTab(t.key)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                background: activeTab === t.key ? NAVY : "transparent",
                color: activeTab === t.key ? "white" : "#6b7280",
              }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* ── ABA GERAL ── */}
        {activeTab === "geral" && (
          <div className="space-y-4">
            <Card title="Identidade da Igreja" badge="Home">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
                    Slogan
                  </label>
                  <Textarea
                    rows={2}
                    value={data.slogan}
                    onChange={e => setData({ ...data, slogan: e.target.value })}
                  />
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* ── ABA CULTOS ── */}
        {activeTab === "cultos" && (
          <Card title="Horários de Culto" badge="Home + Eventos">
            <div className="space-y-4">
              {data.cultos.map((c, i) => (
                <div key={i} className="p-4 rounded-xl border border-gray-100 bg-gray-50 space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{c.icon}</span>
                    <span className="text-xs font-bold text-gray-400">Culto {i + 1}</span>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Título</label>
                    <Input
                      value={c.titulo}
                      onChange={e => {
                        const updated = [...data.cultos];
                        updated[i] = { ...updated[i], titulo: e.target.value };
                        setData({ ...data, cultos: updated });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Horário</label>
                    <Input
                      value={c.horario}
                      onChange={e => {
                        const updated = [...data.cultos];
                        updated[i] = { ...updated[i], horario: e.target.value };
                        setData({ ...data, cultos: updated });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* ── ABA VERSÍCULOS ── */}
        {activeTab === "versiculos" && (
          <Card title="Versículos do Carrossel" badge="Home">
            <div className="space-y-4">
              {data.versiculos.map((v, i) => (
                <div key={i} className="p-4 rounded-xl border border-gray-100 bg-gray-50 space-y-3">
                  <span className="text-xs font-bold text-gray-400">Versículo {i + 1}</span>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Texto</label>
                    <Textarea
                      rows={2}
                      value={v.text}
                      onChange={e => {
                        const updated = [...data.versiculos];
                        updated[i] = { ...updated[i], text: e.target.value };
                        setData({ ...data, versiculos: updated });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Referência</label>
                    <Input
                      value={v.ref}
                      onChange={e => {
                        const updated = [...data.versiculos];
                        updated[i] = { ...updated[i], ref: e.target.value };
                        setData({ ...data, versiculos: updated });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* ── BOTÕES ── */}
        <div className="flex items-center justify-between mt-6">
          <Btn variant="ghost" onClick={reset}>↩ Resetar tudo</Btn>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-sm font-medium" style={{ color: "#2e6b3e" }}>
                ✅ Salvo com sucesso!
              </span>
            )}
            <Btn onClick={save}>💾 Salvar alterações</Btn>
          </div>
        </div>

      </div>
    </div>
  );
};

// ═══ PÁGINA ADMIN (controla auth) ════════════════════════════════
const Admin = () => {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem("iebam_admin_auth") === "1"
  );

  const handleLogout = () => {
    sessionStorage.removeItem("iebam_admin_auth");
    setAuthed(false);
  };

  return authed
    ? <AdminPanel onLogout={handleLogout} />
    : <LoginScreen onLogin={() => setAuthed(true)} />;
};

export default Admin;
