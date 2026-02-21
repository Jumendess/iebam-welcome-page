import { useRef } from "react";
import churchHero from "@/assets/church-hero.jpg";
import logoIEBAM from "@/assets/logo-IEBAM-horizontal.png";
import {
  MapPin,
  MessageCircle,
  ChevronDown,
  BookOpen,
  Users,
  Heart,
  Play,
  CheckCircle2,
  ArrowRight,
  Clock,
  ExternalLink,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5592999999999?text=Oi!%20Sou%20novo(a)%20e%20queria%20visitar%20domingo.%20Como%20funciona%3F";
const SITE_OFICIAL = "https://www.iebam.org.br";

const Index = () => {
  const visitRef = useRef<HTMLDivElement>(null);
  const knowRef = useRef<HTMLDivElement>(null);
  const walkRef = useRef<HTMLDivElement>(null);
  const expectRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── FLOATING WHATSAPP ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-whatsapp-hover transition-all"
        aria-label="Falar pelo WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
      {/* ── HERO ── */}
      <header className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={churchHero} alt="IEBAM" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/65 to-background" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center">
          <img
            src={logoIEBAM}
            alt="IEBAM - Igreja Evangélica Batista no Alto da Mooca"
            className="w-64 md:w-80 mb-6 drop-shadow-lg"
          />

          <p className="text-lg md:text-xl text-gold font-medium mb-4 leading-relaxed">
            Online como porta de entrada. Presença e comunhão no presencial.
          </p>

          <p className="text-base text-primary-foreground/80 max-w-md leading-relaxed">
            A internet aproxima, mas não substitui o encontro presencial. Estamos felizes por você estar aqui — escolha seu próximo passo.
          </p>

          <button
            onClick={() => scrollTo(visitRef)}
            className="mt-10 animate-bounce"
            aria-label="Ver conteúdo"
          >
            <ChevronDown className="text-gold/60 w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ── 3 JORNADAS ── */}
      <section ref={visitRef} className="py-16 px-6 bg-background scroll-mt-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-muted-foreground text-sm mb-8">
            Escolha como deseja caminhar conosco
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <JourneyButton
              onClick={() => scrollTo(visitRef)}
              icon={<MapPin className="w-6 h-6" />}
              label="Quero Visitar"
              description="Como é chegar na IEBAM"
              color="navy"
              scrollTarget={visitRef}
            />
            <JourneyButton
              onClick={() => scrollTo(knowRef)}
              icon={<BookOpen className="w-6 h-6" />}
              label="Quero Conhecer"
              description="Vídeos curtos sobre a igreja"
              color="gold"
              scrollTarget={knowRef}
            />
            <JourneyButton
              onClick={() => scrollTo(walkRef)}
              icon={<Users className="w-6 h-6" />}
              label="Quero Caminhar"
              description="Próximos passos práticos"
              color="navy"
              scrollTarget={walkRef}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── SEÇÃO: QUERO VISITAR ── */}
      <section className="py-20 px-6 scroll-mt-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            icon={<MapPin className="w-5 h-5 text-gold" />}
            eyebrow="Sua primeira vez"
            title="Como é visitar a IEBAM"
          />

          <div className="mt-10 space-y-4">
            <VisitItem
              emoji="👋"
              title="Recepção calorosa"
              text="Assim que chegar, uma equipe vai te receber na porta e te ajudar a se sentir em casa."
            />
            <VisitItem
              emoji="🚪"
              title="Entrada fácil"
              text="Não tem segredo: basta chegar e entrar. Não precisa avisar antes."
            />
            <VisitItem
              emoji="👕"
              title="Venha como está"
              text="Sem dress code. O que importa é a sua presença, não a sua roupa."
            />
            <VisitItem
              emoji="👶"
              title="Crianças são bem-vindas"
              text="Pode trazer toda a família. Temos espaço pensado para os pequenos também."
            />
            <VisitItem
              emoji="🤝"
              title="Equipe de recepção"
              text="Se tiver qualquer dúvida, nossa equipe está pronta para ajudar — antes, durante ou depois."
            />
          </div>

          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-whatsapp text-whatsapp-foreground font-semibold text-lg hover:bg-whatsapp-hover transition-colors shadow-lg hover:shadow-xl"
            >
              <WhatsAppIcon className="w-7 h-7" />
              Falar com a Recepção
            </a>
            <p className="text-muted-foreground text-xs mt-2 ml-1">
              Mensagem automática · Respondemos de segunda a domingo, todos os horários
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── SEÇÃO: QUERO CONHECER ── */}
      <section ref={knowRef} className="py-20 px-6 scroll-mt-8 bg-cream-dark/40">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            icon={<BookOpen className="w-5 h-5 text-gold" />}
            eyebrow="Conheça de perto"
            title="Trilha de Vídeos"
          />

          <p className="text-muted-foreground mt-4 mb-8 max-w-lg">
            Vídeos curtos para você conhecer a IEBAM no seu tempo — sem pressa, sem pressão.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <VideoCard
              episode={1}
              title="Comece por aqui"
              duration="4 min"
              highlight
            />
            <VideoCard
              episode={2}
              title="O que acreditamos"
              duration="5 min"
            />
            <VideoCard
              episode={3}
              title="Como é um culto"
              duration="3 min"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── SEÇÃO: QUERO CAMINHAR ── */}
      <section ref={walkRef} className="py-20 px-6 scroll-mt-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            icon={<Heart className="w-5 h-5 text-gold" />}
            eyebrow="Próximos passos"
            title="Caminhe Conosco"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            <StepCard
              number="01"
              title="Classe de Integração"
              text="Um encontro especial para conhecer a igreja, tirar dúvidas e encontrar seu lugar."
            />
            <StepCard
              number="02"
              title="Vida Comunitária"
              text="Grupos, encontros e momentos para criar vínculos reais com outras pessoas."
            />
            <StepCard
              number="03"
              title="Discipulado & EBD"
              text="Crescimento espiritual com acompanhamento e ensino bíblico presencial."
            />
            <StepCard
              number="04"
              title="Servir com seus dons"
              text="Descubra como usar o que você tem de melhor para abençoar a comunidade."
            />
          </div>

          <div className="mt-10 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-navy-dark transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Quero dar o primeiro passo
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── O QUE ESPERAR ── */}
      <section ref={expectRef} className="py-16 px-6 bg-cream-dark/40">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
            O que esperar
          </h2>
          <div className="space-y-5">
            <ExpectItem text="Você será bem recebido — de verdade." />
            <ExpectItem text='Não precisa se arrumar "de um jeito". Venha como está.' />
            <ExpectItem text="A igreja é família. Aqui você tem lugar." />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── CTA WHATSAPP FORTE ── */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-card rounded-3xl border border-border p-10 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-whatsapp/10 flex items-center justify-center mx-auto mb-5">
              <WhatsAppIcon className="w-9 h-9 text-whatsapp" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Quer conversar?
            </h2>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Nossa equipe de recepção está pronta para te ajudar.
              Respondemos todos os dias, de segunda a domingo, em todos os horários.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-whatsapp text-whatsapp-foreground font-bold text-xl hover:bg-whatsapp-hover transition-colors shadow-lg hover:shadow-xl"
            >
              <WhatsAppIcon className="w-7 h-7" />
              Falar com a Recepção
            </a>
            <p className="text-muted-foreground text-xs mt-3">
              Mensagem automática: "Oi! Sou novo(a) e queria visitar domingo."
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-primary text-primary-foreground py-10 px-6 text-center">
        <p className="font-serif text-2xl font-semibold tracking-widest mb-2">IEBAM</p>
        <div className="mt-3 flex justify-center gap-1">
          <div className="w-8 h-px bg-gold/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/70 -mt-0.5" />
          <div className="w-8 h-px bg-gold/50" />
        </div>
        <a
          href={SITE_OFICIAL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary-foreground/50 text-xs mt-5 hover:text-primary-foreground/70 transition-colors"
        >
          Informações oficiais (site principal)
          <ExternalLink className="w-3 h-3" />
        </a>
        <p className="text-primary-foreground/30 text-xs mt-3">
          © {new Date().getFullYear()} IEBAM
        </p>
      </footer>
    </div>
  );
};

/* ── Sub-components ── */



function JourneyButton({
  onClick,
  icon,
  label,
  description,
  color,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  description: string;
  color: "navy" | "gold";
  scrollTarget: React.RefObject<HTMLDivElement>;
}) {
  const base =
    "group flex flex-col items-center gap-3 p-7 rounded-2xl border-2 transition-all duration-200 cursor-pointer text-center w-full active:scale-95";
  const variants = {
    navy: "border-primary bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg",
    gold: "border-accent bg-card hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-lg",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[color]}`}>
      <span className="text-gold group-hover:text-inherit transition-colors">{icon}</span>
      <span className="font-serif font-bold text-lg leading-snug">{label}</span>
      <span className="text-muted-foreground group-hover:text-inherit/80 text-xs transition-colors">
        {description}
      </span>
    </button>
  );
}

function SectionHeader({
  icon,
  eyebrow,
  title,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      <div className="mt-3 w-12 h-0.5 bg-gold rounded-full" />
    </div>
  );
}

function VisitItem({ emoji, title, text }: { emoji: string; title: string; text: string }) {
  return (
    <div className="flex gap-4 bg-card rounded-xl border border-border p-5">
      <span className="text-2xl shrink-0 mt-0.5">{emoji}</span>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function VideoCard({
  episode,
  title,
  duration,
  highlight,
}: {
  episode: number;
  title: string;
  duration: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border-2 overflow-hidden cursor-pointer hover:shadow-md transition-all group ${
        highlight
          ? "border-gold bg-gold/5"
          : "border-border bg-card hover:border-gold/40"
      }`}
    >
      <div className="aspect-video bg-primary/8 flex items-center justify-center relative">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
          <Play className="w-5 h-5 text-primary group-hover:text-gold transition-colors ml-0.5" />
        </div>
        {highlight && (
          <span className="absolute top-3 left-3 bg-gold text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
            Comece aqui
          </span>
        )}
        <span className="absolute bottom-2 right-3 text-[11px] text-muted-foreground flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {duration}
        </span>
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">Episódio {episode}</p>
        <h4 className="font-semibold text-foreground text-sm">{title}</h4>
      </div>
    </div>
  );
}

function StepCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 hover:border-accent/50 hover:shadow-md transition-all">
      <span className="text-3xl font-serif font-bold text-gold/30">{number}</span>
      <h3 className="font-semibold text-foreground mt-2 mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function ExpectItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-left max-w-md mx-auto">
      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
      <p className="text-foreground">{text}</p>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center gap-4 px-8 max-w-3xl mx-auto py-2">
      <div className="flex-1 h-px bg-border" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default Index;
