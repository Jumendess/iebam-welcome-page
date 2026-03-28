import { useState } from "react";
import Layout from "@/components/Layout";
import igrejaBanner from "@/assets/igreja-banner.jpg";
import { PASTORES, TEXTOS_IGREJA, NAVY, GOLD, SERIF } from "@/config/igreja";

const pastorAssets = import.meta.glob("../assets/pastor-*.{jpg,jpeg,png,webp}", { eager: true, query: "?url", import: "default" });
function getPastorFotoUrl(foto: string): string {
  const key = `../assets/${foto}`;
  return (pastorAssets[key] as string) ?? "";
}

const CrossDivider = () => (
  <div className="flex items-center justify-center gap-3 my-4">
    <span className="block h-px w-16" style={{ background: `${GOLD}60` }} />
    <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
      <rect x="4.5" y="0" width="3" height="18" fill={GOLD} />
      <rect x="0" y="4" width="12" height="3" fill={GOLD} />
    </svg>
    <span className="block h-px w-16" style={{ background: `${GOLD}60` }} />
  </div>
);

const AIgreja = () => {
  const [fotoExpandida, setFotoExpandida] = useState<string | null>(null);

  return (
    <Layout>

      {/* ── FOTO — completa, sem corte, sem efeito ── */}
      <section className="w-full bg-white">
        <img
          src={igrejaBanner}
          alt="Igreja Evangélica Batista no Alto da Mooca"
          style={{ width: "100%", display: "block", height: "auto" }}
        />
      </section>

      {/* ── TEXTOS INSTITUCIONAIS ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-4xl font-bold text-center mb-1" style={{ color: GOLD, fontFamily: SERIF }}>
            A IEBAM
          </h1>
          <CrossDivider />

          <div className="mt-8 rounded-2xl p-8 md:p-10 shadow-sm space-y-10 text-sm leading-7 text-gray-600"
            style={{ border: `2px solid ${GOLD}` }}>
            {TEXTOS_IGREJA.map((t, i) => (
              <div key={i}>
                <p>{t.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE DE PASTORES ── */}
      <section className="py-16 px-6" style={{ background: "#f8f7f4" }}>
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-1" style={{ color: GOLD, fontFamily: SERIF }}>
            Pastores
          </h2>
          <p className="text-center text-gray-400 text-sm mb-10">
            A história da IEBAM contada através dos seus líderes
          </p>

          <div className="relative">
            {/* Linha vertical */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px"
              style={{ background: `${GOLD}35` }} />

            <div className="space-y-3">
              {PASTORES.map((p, i) => {
                const isAtual = !!p.atual;
                return (
                  <div key={i} className="relative flex gap-5 items-start">

                    {/* Bolinha na linha */}
                    <div className="relative z-10 shrink-0 mt-3">
                      <div
                        className="w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center"
                        style={{
                          background: isAtual ? GOLD : "white",
                          borderColor: isAtual ? GOLD : `${GOLD}70`,
                        }}
                      >
                        {isAtual && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="flex-1 rounded-xl border p-4 mb-1"
                      style={
                        isAtual
                          ? { background: `${GOLD}0c`, borderColor: `${GOLD}50` }
                          : { background: "white", borderColor: "#f0f0f0" }
                      }
                    >
                      <div className={isAtual && p.foto ? "flex gap-4 items-center" : ""}>

                        {isAtual && p.foto && (
                          <button
                            onClick={() => setFotoExpandida(getPastorFotoUrl(p.foto!))}
                            className="shrink-0 rounded-full overflow-hidden group relative"
                            style={{ width: 96, height: 96, border: `3px solid ${GOLD}` }}
                            title="Clique para ampliar"
                          >
                            <img
                              src={getPastorFotoUrl(p.foto)}
                              alt={p.nome}
                              className="w-full h-full object-cover object-center"
                              style={{ filter: "contrast(1.08) saturate(1.05) brightness(1.02)" }}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center">
                              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}
                                className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                              </svg>
                            </div>
                          </button>
                        )}

                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-400 mb-0.5">{p.periodo}</p>
                          <h3
                            className="font-bold text-sm"
                            style={{ color: isAtual ? GOLD : NAVY, fontFamily: SERIF }}
                          >
                            {p.nome}
                          </h3>

                          {p.cargo && (
                            <span
                              className="inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full font-semibold"
                              style={{ background: `${GOLD}22`, color: "#7a5a00" }}
                            >
                              {p.cargo}
                            </span>
                          )}

                          {isAtual && (
                            <div className="mt-3 space-y-1.5 text-xs text-gray-500">
                              {p.telefone && (
                                <p className="flex items-center gap-2">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                    className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                  </svg>
                                  {p.telefone}
                                </p>
                              )}
                              {p.email && (
                                <p className="flex items-center gap-2">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                    className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <a href={`mailto:${p.email}`} className="hover:underline" style={{ color: GOLD }}>
                                    {p.email}
                                  </a>
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX DA FOTO DO PASTOR ── */}
      {fotoExpandida && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.88)" }}
          onClick={() => setFotoExpandida(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setFotoExpandida(null)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={fotoExpandida}
            alt="Pastor"
            className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl"
            style={{
              border: `3px solid ${GOLD}`,
              filter: "contrast(1.08) saturate(1.05) brightness(1.02)",
            }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

    </Layout>
  );
};

export default AIgreja;
