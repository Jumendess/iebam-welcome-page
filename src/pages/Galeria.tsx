import { useState } from "react";
import Layout from "@/components/Layout";
import { GALERIA, INSTAGRAM_URL, NAVY, GOLD, SERIF } from "@/config/igreja";

// Import all gallery assets statically so Vite bundles them
const galeriaAssets = import.meta.glob("../assets/galeria/*", { eager: true, query: "?url", import: "default" });

function getGaleriaUrl(src: string): string {
  const key = `../assets/galeria/${src}`;
  return (galeriaAssets[key] as string) ?? "";
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

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const Galeria = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

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

      {/* ── MOBILE/TABLET: carrossel horizontal ── */}
      <section className="lg:hidden py-10 bg-white">
        <div
          className="flex gap-3 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
        >
          {GALERIA.map((foto, i) => (
            <div
              key={i}
              className="shrink-0 w-64 h-64 rounded-xl overflow-hidden relative cursor-pointer snap-start group"
              onClick={() => setLightbox(i)}
            >
              <img
                src={getGaleriaUrl(foto.src)}
                alt={foto.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-active:bg-black/30 transition-all duration-200 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}
                  className="w-8 h-8 opacity-0 group-active:opacity-100 drop-shadow">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
            </div>
          ))}

          {/* Ver mais — carrossel */}
          <div className="shrink-0 w-48 h-64 snap-start">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 w-full h-full rounded-xl transition-all duration-200 group"
              style={{ background: `${GOLD}15`, border: `2px dashed ${GOLD}60` }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center group-active:scale-110 transition-transform"
                style={{ background: GOLD, color: "white" }}
              >
                <InstagramIcon />
              </div>
              <span className="text-sm font-semibold" style={{ color: NAVY }}>Ver mais fotos</span>
              <span className="text-xs" style={{ color: `${GOLD}cc` }}>no Instagram</span>
            </a>
          </div>
        </div>

        {/* Indicador de scroll */}
        <p className="text-center text-xs text-gray-300 mt-1">← deslize para ver mais →</p>
      </section>

      {/* ── DESKTOP: grid masonry ── */}
      <section className="hidden lg:block py-12 px-6 bg-white min-h-[40vh]">
        <div className="max-w-5xl mx-auto">
          <div className="columns-4 gap-3 [column-gap:0.75rem]">

            {GALERIA.map((foto, i) => (
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}
                    className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            ))}

            {/* Ver mais — grid */}
            <div className="break-inside-avoid mb-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 w-full h-40 rounded-xl transition-all duration-200 group"
                style={{ background: `${GOLD}15`, border: `2px dashed ${GOLD}60` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                  style={{ background: GOLD, color: "white" }}
                >
                  <InstagramIcon />
                </div>
                <span className="text-sm font-semibold" style={{ color: NAVY }}>Ver mais fotos</span>
                <span className="text-xs" style={{ color: `${GOLD}cc` }}>no Instagram</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && GALERIA[lightbox] && (
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
          {lightbox < GALERIA.length - 1 && (
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
              src={getGaleriaUrl(GALERIA[lightbox].src)}
              alt={GALERIA[lightbox].titulo}
              className="max-h-[80vh] max-w-full object-contain rounded-lg"
            />
            <p className="text-white/30 text-xs">{lightbox + 1} / {GALERIA.length}</p>
          </div>
        </div>
      )}

    </Layout>
  );
};

export default Galeria;
