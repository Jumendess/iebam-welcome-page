import { useState } from "react";
import Layout from "@/components/Layout";
import { CULTOS_SEMANAIS, AGENDA_ANUAL, YOUTUBE_URL, NAVY, GOLD, SERIF } from "@/config/igreja";

const MESES = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",
];

const TIPO_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  culto:       { bg: "#e8edf5", text: NAVY,      label: "Culto"        },
  conferencia: { bg: "#fdf3e0", text: "#92600a",  label: "Conferência"  },
  retiro:      { bg: "#e6f4ea", text: "#2e6b3e",  label: "Retiro"       },
  social:      { bg: "#f0ebfa", text: "#5b2d8e",  label: "Social"       },
  especial:    { bg: `${GOLD}22`, text: "#7a5a00", label: "Especial"    },
  aniversario: { bg: "#fce8e8", text: "#8b1a1a",  label: "Aniversário"  },
};

const CrossDivider = () => (
  <div className="flex items-center justify-center gap-3 my-1">
    <span className="block h-px w-16" style={{ background: `${GOLD}60` }} />
    <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
      <rect x="4.5" y="0" width="3" height="18" fill={GOLD} />
      <rect x="0" y="4" width="12" height="3" fill={GOLD} />
    </svg>
    <span className="block h-px w-16" style={{ background: `${GOLD}60` }} />
  </div>
);

const Eventos = () => {
  const mesMesAtual = new Date().getMonth() + 1;
  const [mesFiltro, setMesFiltro] = useState<number | null>(null);
  const [tipoFiltro, setTipoFiltro] = useState<string | null>(null);

  const eventosFiltrados = AGENDA_ANUAL.filter(e => {
    if (mesFiltro && e.mes !== mesFiltro) return false;
    if (tipoFiltro && e.tipo !== tipoFiltro) return false;
    return true;
  });

  const porMes = MESES.reduce((acc, _, i) => {
    const mes = i + 1;
    const items = eventosFiltrados.filter(e => e.mes === mes);
    if (items.length > 0) acc.push({ mes, nome: MESES[i], items });
    return acc;
  }, [] as { mes: number; nome: string; items: typeof AGENDA_ANUAL }[]);

  return (
    <Layout>

      {/* ── BANNER ── */}
      <section className="py-16 px-6 text-center" style={{ background: "#f8f7f4" }}>
        <h1 className="text-5xl font-bold mb-3" style={{ color: GOLD, fontFamily: SERIF }}>
          Eventos
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto mb-4">
          Acompanhe nossos cultos semanais e a agenda de eventos especiais ao longo do ano.
        </p>
        <CrossDivider />
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded text-sm font-semibold text-white shadow-sm hover:brightness-110 transition-all"
          style={{ background: GOLD }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Assistir Cultos Online
        </a>
      </section>

      {/* ── CULTOS SEMANAIS ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-1 text-center" style={{ color: NAVY, fontFamily: SERIF }}>
            Cultos Semanais
          </h2>
          <p className="text-center text-gray-400 text-sm mb-8">Toda semana, sem exceção</p>

          <div className="grid md:grid-cols-2 gap-4">
            {CULTOS_SEMANAIS.map((c, i) => (
              <div key={i}
                className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shrink-0"
                  style={{ background: `${GOLD}18` }}>
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-0.5" style={{ color: NAVY }}>{c.titulo}</h3>
                  <p className="text-xs text-gray-400 mb-2">{c.descricao}</p>
                  <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${GOLD}20`, color: "#7a5a00" }}>
                    {c.dia} · {c.horario}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENDA ANUAL ── */}
      <section className="py-14 px-6" style={{ background: "#f8f7f4" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-1 text-center" style={{ color: NAVY, fontFamily: SERIF }}>
            Agenda Anual
          </h2>
          <p className="text-center text-gray-400 text-sm mb-8">Confira os eventos especiais ao longo do ano</p>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <select
              className="text-sm border border-gray-200 rounded-full px-4 py-2 bg-white outline-none cursor-pointer"
              style={{ color: NAVY }}
              value={mesFiltro ?? ""}
              onChange={e => setMesFiltro(e.target.value ? Number(e.target.value) : null)}
            >
              <option value="">Todos os meses</option>
              {MESES.map((m, i) => (
                <option key={i} value={i + 1}>{m}</option>
              ))}
            </select>

            <select
              className="text-sm border border-gray-200 rounded-full px-4 py-2 bg-white outline-none cursor-pointer"
              style={{ color: NAVY }}
              value={tipoFiltro ?? ""}
              onChange={e => setTipoFiltro(e.target.value || null)}
            >
              <option value="">Todos os tipos</option>
              {Object.entries(TIPO_STYLES).map(([key, val]) => (
                <option key={key} value={key}>{val.label}</option>
              ))}
            </select>

            {(mesFiltro || tipoFiltro) && (
              <button
                onClick={() => { setMesFiltro(null); setTipoFiltro(null); }}
                className="text-sm px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                style={{ color: NAVY }}
              >
                Limpar ✕
              </button>
            )}
          </div>

          {/* Legenda de tipos */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {Object.entries(TIPO_STYLES).map(([_, val]) => (
              <span key={val.label} className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: val.bg, color: val.text }}>
                {val.label}
              </span>
            ))}
          </div>

          {/* Lista por mês */}
          {porMes.length === 0 ? (
            <div className="text-center text-gray-400 py-10">
              Nenhum evento encontrado para os filtros selecionados.
            </div>
          ) : (
            <div className="space-y-10">
              {porMes.map(({ mes, nome, items }) => (
                <div key={mes}>
                  {/* Cabeçalho do mês */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                      style={{ background: mes === mesMesAtual ? GOLD : NAVY }}>
                      {mes}
                    </div>
                    <h3 className="text-lg font-bold" style={{ color: NAVY, fontFamily: SERIF }}>
                      {nome}
                      {mes === mesMesAtual && (
                        <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full align-middle"
                          style={{ background: `${GOLD}25`, color: "#7a5a00" }}>
                          mês atual
                        </span>
                      )}
                    </h3>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>

                  {/* Eventos */}
                  <div className="space-y-3">
                    {items.map((evento, i) => {
                      const estilo = TIPO_STYLES[evento.tipo];
                      return (
                        <div key={i}
                          className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-sm transition-all">
                          {/* Dia */}
                          <div className="shrink-0 w-16 pt-0.5 text-center">
                            <span className="text-xs font-bold leading-tight"
                              style={{ color: GOLD }}>
                              {evento.dia}
                            </span>
                          </div>
                          {/* Linha vertical */}
                          <div className="w-px self-stretch rounded-full"
                            style={{ background: `${GOLD}40` }} />
                          {/* Conteúdo */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 flex-wrap">
                              <h4 className="font-semibold text-sm" style={{ color: NAVY }}>
                                {evento.titulo}
                              </h4>
                              <span className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0"
                                style={{ background: estilo.bg, color: estilo.text }}>
                                {estilo.label}
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                              {evento.descricao}
                            </p>
                            {evento.youtube && (
                              <a href={evento.youtube} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs mt-1.5 font-medium hover:underline"
                                style={{ color: GOLD }}>
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                Assistir online
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </Layout>
  );
};

export default Eventos;
