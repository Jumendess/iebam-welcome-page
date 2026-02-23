import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoNavbar from "@/assets/logo-IEBAM-horizontal.png";
import logoFooter from "@/assets/logo-IEBAM-horizontal.png";
import {
  FACEBOOK_URL, YOUTUBE_URL, INSTAGRAM_URL,
  ENDERECO_RUA, ENDERECO_BAIRRO, ENDERECO_CIDADE,
  IGREJA_NOME_COMPLETO,
} from "@/config/igreja";

const NAV_LINKS = [
  { to: "/home",     label: "Home"     },
  { to: "/a-igreja", label: "A Igreja" },
  { to: "/eventos",  label: "Eventos"  },
  { to: "/galeria",  label: "Galeria"  },
  { to: "/contato",  label: "Contato"  },
  { to: "/porta",    label: "Porta"    },
];

// ── Ícones sociais ───────────────────────────────────────────────
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const SOCIAL_NAV = [
  { href: FACEBOOK_URL,  Icon: FacebookIcon  },
  { href: YOUTUBE_URL,   Icon: YoutubeIcon   },
  { href: INSTAGRAM_URL, Icon: InstagramIcon },
];

// ── Layout ───────────────────────────────────────────────────────
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ═══ NAVBAR ════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/home" className="flex items-center shrink-0">
            <img src={logoNavbar} alt="IEBAM" className="h-12" />
          </Link>

          {/* Desktop: links + sociais */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ to, label }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className="text-sm font-medium transition-colors"
                  style={{ color: active ? "#c9a84c" : "#1a2e5a" }}
                  onMouseEnter={e => { if (!active) (e.target as HTMLElement).style.color = "#c9a84c"; }}
                  onMouseLeave={e => { if (!active) (e.target as HTMLElement).style.color = "#1a2e5a"; }}
                >
                  {label}
                </Link>
              );
            })}
            <span className="w-px h-5 bg-gray-200" />
            <div className="flex items-center gap-3">
              {SOCIAL_NAV.map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#1a2e5a] transition-colors">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile: hambúrguer */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded focus:outline-none"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <span className="block w-6 h-0.5 rounded" style={{ background: "#1a2e5a" }} />
            <span className="block w-6 h-0.5 rounded" style={{ background: "#1a2e5a" }} />
            <span className="block w-6 h-0.5 rounded" style={{ background: "#1a2e5a" }} />
          </button>
        </div>
      </nav>

      {/* ═══ SIDEBAR MOBILE ════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
          <img src={logoNavbar} alt="IEBAM" className="h-10" />
          <button onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
          {NAV_LINKS.map(({ to, label }) => {
            const active = pathname === to;
            return (
              <Link key={to} to={to} onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium transition-colors"
                style={{ color: active ? "#c9a84c" : "#1a2e5a", background: active ? "#fdf8ee" : "transparent" }}>
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="px-6 py-6 border-t border-gray-100 flex gap-4">
          {SOCIAL_NAV.map(({ href, Icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1a2e5a] transition-colors">
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* ═══ CONTEÚDO ══════════════════════════════════════════ */}
      <main className="flex-1">{children}</main>

      {/* ═══ FOOTER GLOBAL ═════════════════════════════════════ */}
      <footer style={{ background: "#1a1a1a" }} className="text-white/70 py-14 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_2fr_1fr_1.5fr] gap-10">

          {/* Marca */}
          <div className="space-y-4">
            <img src={logoFooter} alt="IEBAM" className="h-14" />
            <div className="flex gap-4">
              {SOCIAL_NAV.map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              É soberana, autônoma e independente, não estando subordinada a nenhuma outra
              igreja ou entidade, reconhecendo exclusivamente a autoridade de Jesus Cristo
              expressa nas Sagradas Escrituras.
            </p>
          </div>

          {/* Eventos e Cultos */}
          <div className="space-y-3">
            <p className="font-semibold text-sm" style={{ color: "#c9a84c" }}>Eventos e Cultos</p>
            <p className="text-xs text-white/40 leading-relaxed">
              Os cultos também são transmitidos on-line.{" "}
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer"
                className="underline hover:text-yellow-400 transition-colors">
                Verifique nossos horários de transmissão de cultos e eventos.
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <p className="font-semibold text-sm" style={{ color: "#c9a84c" }}>Links</p>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-yellow-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Endereço */}
          <div className="text-xs text-white/40 space-y-1 leading-relaxed">
            <p className="font-semibold text-sm mb-2" style={{ color: "#c9a84c" }}>Endereço</p>
            <p>{ENDERECO_RUA}</p>
            <p>{ENDERECO_BAIRRO}</p>
            <p>{ENDERECO_CIDADE}</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/25">
          © {new Date().getFullYear()} {IGREJA_NOME_COMPLETO}
        </div>
      </footer>

    </div>
  );
};

export default Layout;