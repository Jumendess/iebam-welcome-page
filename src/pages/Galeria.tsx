import { useState } from "react";
import Layout from "@/components/Layout";
import { GALERIA, NAVY, GOLD, SERIF } from "@/config/igreja";

// Import all gallery assets statically so Vite bundles them
const galeriaAssets = import.meta.glob("../assets/galeria/*", { eager: true, query: "?url", import: "default" });

function getGaleriaUrl(src: string): string {
  const key = `../assets/galeria/${src}`;
  return (galeriaAssets[key] as string) ?? "";
}

const CATEGORIAS = [
  { value: "todos",    label: "Todos"    },
  { value: "culto",    label: "Cultos"   },
  { value: "eventos",  label: "Eventos"  },
  { value: "jovens",   label: "Jovens"   },
  { value: "missoes",  label: "Missões"  },
  { value: "edificio", label: "Edifício" },
];

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

const Galeria = () => {
  const [categoria, setCategoria] = useState("todos");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtradas = GALERIA.filter(
    f => categoria === "todos" || f.categoria === categoria
  );

  return (
    <Layout>

      {/* ── BANNER ── */}
      <section className="py-16 px-6 text-center" style={{ background: "#f8f7f4" }}>
        <h1 className="text-4xl font-bold mb-1" style={{ color: GOLD, fontFamily: SERIF }}>
          Galeria
        </h1>
        <p className="text-gray-400 text-sm mb-4">Momentos da nossa comunidade em fotos</p>
        <CrossDivider />
      </section>

      {/* ── FILTROS ── */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {CATEGORIAS.map(c => (
            <button
              key={c.value}
              onClick={() => setCategoria(c.value)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: categoria === c.value ? GOLD : "#f3f4f6",
                color: categoria === c.value ? "white" : NAVY,
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── GRID ── */}
      <section className="py-12 px-6 bg-white min-h-[40vh]">
        <div className="max-w-5xl mx-auto">

          {filtradas.length === 0 ? (
            /* Estado vazio */
            <div className="text-center py-20 space-y-5">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                style={{ background: `${GOLD}15` }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                  className="w-9 h-9" style={{ color: GOLD }}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18M3.75 4.5h16.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: NAVY }}>
                Nenhuma foto ainda
              </h3>
              <div className="max-w-sm mx-auto text-sm text-gray-400 leading-relaxed bg-gray-50 rounded-2xl p-6 text-left">
                <p className="font-semibold text-gray-600 mb-3">Como adicionar fotos:</p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>
                    Coloque as imagens em{" "}
                    <code className="bg-white px-1.5 py-0.5 rounded text-xs border border-gray-200">
                      src/assets/galeria/
                    </code>
                  </li>
                  <li>
                    Abra{" "}
                    <code className="bg-white px-1.5 py-0.5 rounded text-xs border border-gray-200">
                      src/config/igreja.ts
                    </code>
                  </li>
                  <li>Adicione entradas no array <strong>GALERIA</strong></li>
                </ol>
                <pre className="mt-4 bg-white rounded-lg p-3 text-xs border border-gray-200 overflow-x-auto">
{`{
  src: "culto-domingo.jpg",
  titulo: "Culto Dominical",
  categoria: "culto"
}`}
                </pre>
              </div>
            </div>
          ) : (
            /* Grid masonry */
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-gap:0.75rem]">
              {filtradas.map((foto, i) => (
                <div
                  key={i}
                  className="break-inside-avoid mb-3 cursor-pointer overflow-hidden rounded-xl relative group"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={getGaleriaUrl(foto.src)}
                    alt={foto.titulo}
                    className="w-full object-cover block"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-end">
                    <p className="w-full px-3 py-2 text-white text-xs font-medium
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {foto.titulo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && filtradas[lightbox] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          {/* Fechar */}
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Anterior */}
          {lightbox > 0 && (
            <button
              className="absolute left-3 w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Próximo */}
          {lightbox < filtradas.length - 1 && (
            <button
              className="absolute right-3 w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            className="max-w-4xl max-h-[90vh] flex flex-col items-center gap-3"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={getGaleriaUrl(filtradas[lightbox].src)}
              alt={filtradas[lightbox].titulo}
              className="max-h-[80vh] max-w-full object-contain rounded-lg"
            />
            <p className="text-white/60 text-sm">{filtradas[lightbox].titulo}</p>
            <p className="text-white/30 text-xs">{lightbox + 1} / {filtradas.length}</p>
          </div>
        </div>
      )}

    </Layout>
  );
};

export default Galeria;