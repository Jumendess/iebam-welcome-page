import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import churchHero from "@/assets/church-hero.jpg";
import {
  YOUTUBE_CHANNEL_ID, YOUTUBE_API_KEY, YOUTUBE_URL as YOUTUBE_CHANNEL_URL,
  CULTOS, VERSICULOS, NAVY, GOLD, SERIF,
} from "@/config/igreja";

interface YTVideo {
  id: string;
  title: string;
  thumbnail: string;
}

// ── Ícones SVG ───────────────────────────────────────────────────
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const CrossDivider = () => (
  <div className="flex items-center justify-center gap-3 my-1">
    <span className="block h-px w-16" style={{ background: "#a97d5080" }} />
    <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
      <rect x="4.5" y="0" width="3" height="18" fill="#a97d50" />
      <rect x="0" y="4" width="12" height="3" fill="#a97d50" />
    </svg>
    <span className="block h-px w-16" style={{ background: "#a97d5080" }} />
  </div>
);

// ── Hook YouTube API ─────────────────────────────────────────────
function useYouTubeVideos() {
  const [videos, setVideos] = useState<YTVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const isDemo =
      YOUTUBE_API_KEY === "SUA_API_KEY_AQUI" ||
      YOUTUBE_CHANNEL_ID === "UCxxxxxxxxxxxxxxxxxxxxxxx";

    if (isDemo) {
      // Vídeo de demonstração — troque pela sua API key para funcionar de verdade
      setVideos([
        {
          id: "dQw4w9WgXcQ",
          title: "⚙️ Configure YOUTUBE_API_KEY e YOUTUBE_CHANNEL_ID no arquivo Home.tsx",
          thumbnail: `https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg`,
        },
      ]);
      setLoading(false);
      return;
    }

    const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=1&type=video`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data.items?.length) {
          setVideos(
            data.items.map((item: any) => ({
              id: item.id.videoId,
              title: item.snippet.title,
              thumbnail:
                item.snippet.thumbnails.high?.url ||
                item.snippet.thumbnails.default.url,
            }))
          );
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { videos, loading, error };
}

// ── VideoCard ────────────────────────────────────────────────────
const VideoCard = ({ video, featured }: { video: YTVideo; featured?: boolean }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-xl shadow-lg bg-black ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {playing ? (
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div
          className="relative aspect-video cursor-pointer"
          onClick={() => setPlaying(true)}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          {/* Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center shadow-2xl transition-all duration-200 group-hover:scale-110 group-hover:shadow-red-500/40">
              <svg className="w-7 h-7 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <p className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white text-sm font-medium leading-snug line-clamp-2">
            {video.title}
          </p>
        </div>
      )}
    </div>
  );
};

const VerseCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % VERSICULOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "#5b9ec9" }}
    >
      <div className="max-w-3xl mx-auto text-center min-h-[80px] flex flex-col items-center justify-center">
        {VERSICULOS.map((v, i) => (
          <div
            key={i}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-700"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "translateY(0)" : "translateY(12px)",
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            <p className="text-2xl md:text-3xl font-bold text-[#1a2e5a] leading-snug mb-3"
              style={{ fontFamily: SERIF }}>
              "{v.text}"
            </p>
            <p className="text-sm font-semibold text-white tracking-widest uppercase">
              {v.ref}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-16">
        {VERSICULOS.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              background: i === current ? GOLD : NAVY,
              transform: i === current ? "scale(1.2)" : "scale(1)",
            }}
            aria-label={`Ir para versículo ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

// ═══ HOME PAGE ═══════════════════════════════════════════════════
const Home = () => {
  const { videos, loading, error } = useYouTubeVideos();
  const cultosRef = useRef<HTMLElement>(null);

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={churchHero}
          alt="IEBAM"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "slowZoom 20s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.65) 100%)" }} />

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4"
            style={{ textShadow: "0 4px 32px rgba(0,0,0,0.6)", fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Bem-vindo(a) à{" "}
            <br />
            <span style={{ color: "#a97d50" }}>IEBAM</span>
          </h1>
          <p
            className="text-xl text-white/90 mb-8"
            style={{ fontFamily: "Georgia, serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            Igreja Evangélica Batista no Alto da Mooca
          </p>
          <Link
            to="/a-igreja"
            className="inline-block font-bold px-8 py-3 rounded text-base transition-all duration-200 shadow-lg hover:brightness-110"
            style={{ background: "#a97d50", color: "#1a2e5a", letterSpacing: "0.04em" }}
          >
            Conheça a Igreja
          </Link>
        </div>

        <button
          onClick={() => cultosRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </section>

      {/* ── CARDS DE CULTOS ── */}
      <section ref={cultosRef} className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {CULTOS.map((c) => (
            <div
              key={c.titulo}
              className="flex flex-col items-center text-center py-10 px-8 hover:bg-gray-50 transition-colors"
            >
              <span className="text-3xl mb-3">{c.icon}</span>
              <h3
                className="font-bold text-base mb-2"
                style={{ color: "#1a2e5a", fontFamily: "Georgia, serif" }}
              >
                {c.titulo}
              </h3>
              <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">
                {c.horario}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CULTOS ONLINE ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-4xl font-bold mb-2"
              style={{ color: "#a97d50", fontFamily: "Georgia, serif" }}
            >
              Cultos Online
            </h2>
            <p className="text-gray-500 text-base mb-4">
              Os cultos também são transmitidos on-line
            </p>
            <CrossDivider />
          </div>

          {loading && (
            <div className="flex justify-center items-center h-48 gap-3 text-gray-400">
              <svg className="animate-spin w-6 h-6" style={{ color: "#a97d50" }} fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span>Carregando vídeos...</span>
            </div>
          )}

          {!loading && !error && videos.length > 0 && (
            <div className="max-w-2xl mx-auto">
              <VideoCard video={videos[0]} featured />
            </div>
          )}

          {!loading && error && (
            <div className="text-center text-gray-400 py-10">
              <p>Não foi possível carregar os vídeos.</p>
            </div>
          )}

          <div className="text-center mt-8">
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 px-6 py-3 rounded-full hover:border-yellow-600 transition-all text-sm font-medium"
              style={{ "--hover-color": "#a97d50" } as any}
            >
              <YoutubeIcon className="w-5 h-5 text-red-600" />
              Ver todos os vídeos no canal
            </a>
          </div>
        </div>
      </section>

      {/* ── CARROSSEL DE VERSÍCULOS ── */}
      <VerseCarousel />



      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.12); }
        }
      `}</style>
    </Layout>
  );
};

export default Home;