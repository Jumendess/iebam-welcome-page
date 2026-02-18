import { useRef } from "react";
import churchHero from "@/assets/church-hero.jpg";
import { MapPin, Clock, MessageCircle, ChevronDown, BookOpen, Users, Heart, Play } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5592999999999";
const MAPS_URL = "https://maps.google.com/?q=Rua+Exemplo+123+Bairro+Exemplo";

const Index = () => {
  const visitRef = useRef<HTMLDivElement>(null);
  const knowRef = useRef<HTMLDivElement>(null);
  const walkRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── HERO ── */}
      <header className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={churchHero}
            alt="Interior da IEBAM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/65 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center">
          {/* Logo cross symbol */}
          <div className="mb-6 flex flex-col items-center gap-1">
            <div className="w-px h-8 bg-gold/80" />
            <div className="flex items-center gap-1">
              <div className="w-4 h-px bg-gold/80" />
              <div className="w-2 h-2 rounded-full bg-gold" />
              <div className="w-4 h-px bg-gold/80" />
            </div>
            <div className="w-px h-4 bg-gold/80" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-widest text-primary-foreground mb-4 font-serif">
            IEBAM
          </h1>

          <p className="text-lg md:text-xl text-gold font-medium mb-3 leading-relaxed">
            Online como porta de entrada.<br />
            Presença e comunhão no presencial.
          </p>

          <p className="text-base text-primary-foreground/80 max-w-md leading-relaxed">
            Estamos felizes por você estar aqui.<br />
            Escolha abaixo como deseja caminhar conosco.
          </p>

          <div className="mt-8 animate-bounce">
            <ChevronDown className="text-gold/60 w-6 h-6" />
          </div>
        </div>
      </header>

      {/* ── CTA BUTTONS ── */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CtaButton
              onClick={() => scrollTo(visitRef)}
              icon={<MapPin className="w-6 h-6" />}
              label="Quero Visitar"
              description="Cultos, endereço e horários"
              color="navy"
            />
            <CtaButton
              onClick={() => scrollTo(knowRef)}
              icon={<BookOpen className="w-6 h-6" />}
              label="Quero Conhecer a IEBAM"
              description="Quem somos e no que cremos"
              color="gold"
            />
            <CtaButton
              onClick={() => scrollTo(walkRef)}
              icon={<Users className="w-6 h-6" />}
              label="Quero Caminhar"
              description="Integração e membresia"
              color="navy"
            />
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="flex items-center gap-4 px-8 max-w-3xl mx-auto">
        <div className="flex-1 h-px bg-border" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* ── SECTION 1: VISITAR ── */}
      <section ref={visitRef} className="py-20 px-6 scroll-mt-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            icon={<MapPin className="w-5 h-5 text-gold" />}
            eyebrow="Venha nos conhecer"
            title="Quero Visitar a IEBAM"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Horários */}
            <InfoCard>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-gold" />
                <h3 className="font-semibold text-foreground">Horários de Culto</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex justify-between items-center border-b border-border pb-2">
                  <span>Culto Principal</span>
                  <span className="font-medium text-foreground">Dom · 18h30</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Escola Bíblica Dominical</span>
                  <span className="font-medium text-foreground">Dom · 9h</span>
                </li>
              </ul>
            </InfoCard>

            {/* Endereço */}
            <InfoCard>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-gold" />
                <h3 className="font-semibold text-foreground">Endereço</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Rua Exemplo, 123<br />
                Bairro Exemplo — Manaus, AM
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-navy-dark transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Como Chegar
              </a>
            </InfoCard>
          </div>

          {/* FAQ */}
          <div className="mt-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-5">
              Perguntas Frequentes
            </h3>
            <div className="space-y-3">
              <FaqItem
                q="Preciso avisar antes de ir?"
                a="Não. Você é sempre bem-vindo, sem necessidade de aviso prévio."
              />
              <FaqItem
                q="Como devo me vestir?"
                a="Venha como se sentir confortável. O que importa é a sua presença."
              />
              <FaqItem
                q="Posso levar crianças?"
                a="Sim, com prazer! Temos espaço pensado para toda a família."
              />
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-whatsapp text-whatsapp-foreground font-medium hover:bg-whatsapp-hover transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com a Recepção
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── SECTION 2: CONHECER ── */}
      <section ref={knowRef} className="py-20 px-6 scroll-mt-8 bg-cream-dark/40">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            icon={<BookOpen className="w-5 h-5 text-gold" />}
            eyebrow="Nossa história e fé"
            title="Conheça a IEBAM"
          />

          {/* Video placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <VideoPlaceholder label="Quem Somos" />
            <VideoPlaceholder label="Nossa Mensagem" />
          </div>

          {/* Info cards */}
          <div className="mt-8 space-y-4">
            <BeliefCard
              title="Quem Somos"
              text="Somos uma igreja comprometida com o ensino bíblico, comunhão e discipulado. Acreditamos que a igreja é família."
            />
            <BeliefCard
              title="No que Cremos"
              text="Cremos na centralidade de Cristo, na autoridade das Escrituras e na vida em comunidade como expressão do Evangelho."
            />
            <BeliefCard
              title="Nossa Visão"
              text="Ser uma igreja que vive o Evangelho de forma prática e transformadora, impactando famílias e a cidade."
            />
            <BeliefCard
              title="Preparação para Comunhão"
              text="Temos orientações simples sobre a Ceia do Senhor e como participar da vida plena da nossa comunidade."
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── SECTION 3: CAMINHAR ── */}
      <section ref={walkRef} className="py-20 px-6 scroll-mt-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            icon={<Heart className="w-5 h-5 text-gold" />}
            eyebrow="Faça parte"
            title="Caminhe Conosco"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            <StepCard
              number="01"
              title="Classe de Integração"
              text="Um encontro especial para conhecer mais profundamente a nossa história, valores e visão de igreja."
            />
            <StepCard
              number="02"
              title="Escola Bíblica Dominical"
              text="Todo domingo às 9h, um ambiente de ensino bíblico, crescimento espiritual e comunhão."
            />
            <StepCard
              number="03"
              title="Processo de Membresia"
              text="Passos claros e acolhedores para fazer parte oficialmente da família IEBAM."
            />
            <StepCard
              number="04"
              title="Oportunidades de Serviço"
              text="Descubra como servir com seus dons. Há um lugar para você na nossa comunidade."
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

      {/* ── FOOTER ── */}
      <footer className="bg-primary text-primary-foreground py-10 px-6 text-center">
        <p className="font-serif text-2xl font-semibold tracking-widest mb-2">IEBAM</p>
        <p className="text-primary-foreground/60 text-sm">
          Igreja Evangélica Batista — Manaus, AM
        </p>
        <div className="mt-4 flex justify-center gap-1">
          <div className="w-8 h-px bg-gold/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/70 -mt-0.5" />
          <div className="w-8 h-px bg-gold/50" />
        </div>
        <p className="text-primary-foreground/40 text-xs mt-4">
          © {new Date().getFullYear()} IEBAM · Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
};

/* ── Sub-components ── */

function CtaButton({
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

function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
      {children}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <p className="font-semibold text-foreground text-sm mb-1">{q}</p>
      <p className="text-muted-foreground text-sm">{a}</p>
    </div>
  );
}

function BeliefCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-4 bg-card rounded-xl border border-border p-5">
      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 hover:border-accent/50 hover:shadow-md transition-all">
      <span className="text-3xl font-serif font-bold text-gold/30">{number}</span>
      <h3 className="font-semibold text-foreground mt-2 mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div className="aspect-video rounded-2xl bg-primary/8 border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-gold/50 transition-colors group">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
        <Play className="w-5 h-5 text-primary group-hover:text-gold transition-colors ml-0.5" />
      </div>
      <span className="text-sm text-muted-foreground">{label}</span>
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

export default Index;
