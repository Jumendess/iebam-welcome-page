import { useRef } from "react";
import Layout from "@/components/Layout";
import churchHero from "@/assets/church-hero.jpg";
import logoIEBAM from "@/assets/logo-IEBAM-horizontal.png";
import { MapPin, BookOpen, Users, Heart, Play, Clock, ChevronDown, ExternalLink } from "lucide-react";
import {
  WHATSAPP_URL_VISITA, SITE_OFICIAL,
  NAVY, GOLD, SERIF,
} from "@/config/igreja";

// ── WhatsApp Icon ────────────────────────────────────────────────
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── Divisor decorativo ───────────────────────────────────────────
function CrossDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <span className="block h-px w-16" style={{ background: `${GOLD}60` }} />
      <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
        <rect x="4.5" y="0" width="3" height="18" fill={GOLD} />
        <rect x="0" y="4" width="12" height="3" fill={GOLD} />
      </svg>
      <span className="block h-px w-16" style={{ background: `${GOLD}60` }} />
    </div>
  );
}

// ── Cabeçalho de seção ───────────────────────────────────────────
function SectionHeader({ icon, eyebrow, title }: { icon: React.ReactNode; eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: GOLD }}>{icon}</span>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{eyebrow}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold" style={{ color: NAVY, fontFamily: SERIF }}>
        {title}
      </h2>
      <div className="mt-3 w-12 h-0.5 rounded-full" style={{ background: GOLD }} />
    </div>
  );
}

// ── Item de visita ───────────────────────────────────────────────
function VisitItem({ emoji, title, text }: { emoji: string; title: string; text: string }) {
  return (
    <div className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <span className="text-2xl shrink-0 mt-0.5">{emoji}</span>
      <div>
        <h4 className="font-semibold mb-1" style={{ color: NAVY }}>{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

// ── Card de step ────────────────────────────────────────────────
function StepCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-yellow-200 transition-all">
      <span className="text-3xl font-bold" style={{ color: GOLD, fontFamily: SERIF }}>{number}</span>
      <h3 className="font-semibold mt-2 mb-2" style={{ color: NAVY }}>{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

// ── Card de vídeo ────────────────────────────────────────────────
function VideoCard({ episode, title, duration, highlight }: {
  episode: number; title: string; duration: string; highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all group border-2 ${
        highlight ? "border-yellow-400 bg-yellow-50" : "border-gray-100 bg-white hover:border-yellow-200"
      }`}
    >
      <div className="aspect-video flex items-center justify-center relative bg-gray-50">
        <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors group-hover:scale-110 transition-transform"
          style={{ background: `${NAVY}18` }}>
          <Play className="w-5 h-5 ml-0.5" style={{ color: NAVY }} />
        </div>
        {highlight && (
          <span className="absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
            style={{ background: GOLD }}>
            Comece aqui
          </span>
        )}
        <span className="absolute bottom-2 right-3 text-xs text-gray-400 flex items-center gap-1">
          <Clock className="w-3 h-3" /> {duration}
        </span>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 mb-1">Episódio {episode}</p>
        <h4 className="font-semibold text-sm" style={{ color: NAVY }}>{title}</h4>
      </div>
    </div>
  );
}

// ── Botão de jornada ─────────────────────────────────────────────
function JourneyButton({ onClick, icon, label, description, active }: {
  onClick: () => void; icon: React.ReactNode; label: string;
  description: string; active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-3 p-7 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-center w-full active:scale-95 hover:shadow-lg"
      style={{
        borderColor: active ? GOLD : "#e5e7eb",
        background: active ? `${GOLD}10` : "white",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = GOLD;
        (e.currentTarget as HTMLElement).style.background = `${GOLD}10`;
      }}
      onMouseLeave={e => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb";
          (e.currentTarget as HTMLElement).style.background = "white";
        }
      }}
    >
      <span style={{ color: GOLD }}>{icon}</span>
      <span className="font-bold text-lg leading-snug" style={{ color: NAVY, fontFamily: SERIF }}>{label}</span>
      <span className="text-gray-400 text-xs">{description}</span>
    </button>
  );
}

// ── Divisor de seção ─────────────────────────────────────────────
function SectionDivider() {
  return (
    <div className="flex items-center gap-4 px-8 max-w-3xl mx-auto py-4">
      <div className="flex-1 h-px bg-gray-100" />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: `${GOLD}80` }} />
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}

// ═══ INDEX (PORTA) ════════════════════════════════════════════════
const Index = () => {
  const visitRef = useRef<HTMLDivElement>(null);
  const knowRef  = useRef<HTMLDivElement>(null);
  const walkRef  = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      {/* ── BOTÃO WHATSAPP FLUTUANTE ── */}
      <a
        href={WHATSAPP_URL_VISITA}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
        style={{ background: "#25d366" }}
        aria-label="Falar pelo WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8 text-white" />
      </a>

      {/* ── HERO ── */}
      <header className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={churchHero} alt="IEBAM" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to bottom, ${NAVY}cc 0%, ${NAVY}aa 50%, white 100%)`
          }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center">
          <img
            src={logoIEBAM}
            alt="IEBAM"
            className="w-72 md:w-96 mb-6 drop-shadow-xl brightness-110 contrast-110"
          />
          <p className="text-lg md:text-xl font-semibold mb-4 leading-relaxed" style={{ color: GOLD }}>
            Online como porta de entrada. Presença e comunhão no presencial.
          </p>
          <p className="text-base text-white/80 max-w-md leading-relaxed">
            A internet aproxima, mas não substitui o encontro presencial. Estamos felizes por você estar aqui. Escolha seu próximo passo.
          </p>
          <button
            onClick={() => scrollTo(visitRef)}
            className="mt-10 animate-bounce"
            aria-label="Ver conteúdo"
          >
            <ChevronDown className="w-6 h-6" style={{ color: `${GOLD}99` }} />
          </button>
        </div>
      </header>

      {/* ── 3 JORNADAS ── */}
      <section ref={visitRef} className="py-16 px-6 bg-gray-50 scroll-mt-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-400 text-sm mb-8 font-medium tracking-wide uppercase">
            Escolha como deseja caminhar conosco
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <JourneyButton
              onClick={() => scrollTo(visitRef)}
              icon={<MapPin className="w-6 h-6" />}
              label="Quero Visitar"
              description="Como é chegar na IEBAM"
            />
            <JourneyButton
              onClick={() => scrollTo(knowRef)}
              icon={<BookOpen className="w-6 h-6" />}
              label="Quero Conhecer"
              description="Vídeos curtos sobre a igreja"
            />
            <JourneyButton
              onClick={() => scrollTo(walkRef)}
              icon={<Users className="w-6 h-6" />}
              label="Quero Caminhar"
              description="Próximos passos práticos"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── QUERO VISITAR ── */}
      <section className="py-20 px-6 scroll-mt-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            icon={<MapPin className="w-5 h-5" />}
            eyebrow="Sua primeira vez"
            title="Como é visitar a IEBAM"
          />
          <div className="space-y-4">
            <VisitItem emoji="👋" title="Recepção calorosa"
              text="Assim que chegar, uma equipe vai te receber na porta e te ajudar a se sentir em casa." />
            <VisitItem emoji="🚪" title="Entrada fácil"
              text="Não tem segredo: basta chegar e entrar. Não precisa avisar antes." />
            <VisitItem emoji="👕" title="Venha como você está"
              text="Valorizamos sua presença e o respeito pelo ambiente que compartilhamos." />
            <VisitItem emoji="👶" title="Crianças são bem-vindas"
              text="Pode trazer toda a família. Temos espaço pensado para os pequenos também." />
            <VisitItem emoji="🤝" title="Equipe de recepção"
              text="Se tiver qualquer dúvida, nossa equipe está pronta para ajudar. Antes, durante ou depois." />
          </div>
          <div className="mt-10">
            <a
              href={WHATSAPP_URL_VISITA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg text-white shadow-lg hover:brightness-110 transition-all"
              style={{ background: "#25d366" }}
            >
              <WhatsAppIcon className="w-6 h-6" />
              Falar com a Recepção
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── QUERO CONHECER ── */}
      <section ref={knowRef} className="py-20 px-6 scroll-mt-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            icon={<BookOpen className="w-5 h-5" />}
            eyebrow="Conheça de perto"
            title="Trilha de Vídeos"
          />
          <p className="text-gray-400 mb-8 max-w-lg">
            Vídeos curtos para você conhecer a IEBAM no seu tempo — sem pressa, sem pressão.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <VideoCard episode={1} title="Comece por aqui"    duration="4 min" highlight />
            <VideoCard episode={2} title="O que acreditamos" duration="5 min" />
            <VideoCard episode={3} title="Como é um culto"   duration="3 min" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── QUERO CAMINHAR ── */}
      <section ref={walkRef} className="py-20 px-6 scroll-mt-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            icon={<Heart className="w-5 h-5" />}
            eyebrow="Próximos passos"
            title="Caminhe Conosco"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
            <StepCard number="01" title="Classe de Integração"
              text="Um encontro especial para conhecer a igreja, tirar dúvidas e encontrar seu lugar." />
            <StepCard number="02" title="Vida Comunitária"
              text="Grupos, encontros e momentos para criar vínculos reais com outras pessoas." />
            <StepCard number="03" title="EBD"
              text="Crescimento espiritual com acompanhamento e ensino bíblico presencial." />
            <StepCard number="04" title="Servir com seus dons"
              text="Descubra como usar o que você tem de melhor para abençoar a comunidade." />
          </div>
          <div className="mt-10 text-center">
            <a
              href={WHATSAPP_URL_VISITA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg text-white shadow-lg hover:brightness-110 transition-all"
              style={{ background: "#25d366" }}
            >
              <WhatsAppIcon className="w-6 h-6" />
              Falar com a Recepção
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
};


export default Index;