// ═══════════════════════════════════════════════════════════════
// CONFIGURAÇÕES DA IEBAM
// ✏️ Edite este arquivo para atualizar as informações em todo o site
// ═══════════════════════════════════════════════════════════════

// ── Identidade ──────────────────────────────────────────────────
export const IGREJA_NOME     = "IEBAM";
export const IGREJA_NOME_COMPLETO = "Igreja Evangélica Batista no Alto da Mooca";
export const IGREJA_SLOGAN   = "Online como porta de entrada. Presença e comunhão no presencial.";
export const SITE_OFICIAL    = "https://www.iebam.org.br";

// ── Endereço ────────────────────────────────────────────────────
export const ENDERECO_RUA    = "Rua do Oratório, 2930";
export const ENDERECO_BAIRRO = "Alto da Mooca";
export const ENDERECO_CIDADE = "São Paulo – CEP 03165-000";

// ── Contato ─────────────────────────────────────────────────────
export const WHATSAPP_NUMERO     = import.meta.env.VITE_WHATSAPP_NUMERO     || "+55 11 99854-1972";
export const WHATSAPP_URL        = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMERO || "5511998541972"}?text=Oi!%20Vim%20pelo%20site%20e%20queria%20mais%20informa%C3%A7%C3%B5es.`;
export const WHATSAPP_URL_VISITA = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMERO || "5511998541972"}?text=Oi!%20Sou%20novo(a)%20e%20queria%20visitar%20domingo.%20Como%20funciona%3F`;
export const EMAIL               = import.meta.env.VITE_EMAIL               || "contato@iebam.org.br";

// ── Redes Sociais ────────────────────────────────────────────────
export const INSTAGRAM_HANDLE = "@igrejabatistaaltodamooca";
export const INSTAGRAM_URL    = import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/igrejabatistaaltodamooca";

export const FACEBOOK_HANDLE  = "/iebam/950";
export const FACEBOOK_URL     = import.meta.env.VITE_FACEBOOK_URL  || "https://facebook.com/iebam";

export const YOUTUBE_HANDLE   = "IEBAM Vídeo";
export const YOUTUBE_URL      = import.meta.env.VITE_YOUTUBE_URL   || "https://www.youtube.com/@iebam";

// ── YouTube API ──────────────────────────────────────────────────
// ✏️ Configure no arquivo .env na raiz do projeto
export const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || "UCxxxxxxxxxxxxxxxxxxxxxxx";
export const YOUTUBE_API_KEY    = import.meta.env.VITE_YOUTUBE_API_KEY    || "";

// ── Horários de Culto ────────────────────────────────────────────
export const CULTOS = [
  { titulo: "Escola Bíblica Dominical", horario: "DOMINGOS às 8h30",          icon: "📖" },
  { titulo: "Culto de Adoração e Louvor", horario: "DOMINGOS às 10h30 e às 18h", icon: "🙏" },
  { titulo: "Culto de Oração e Estudo Bíblico", horario: "QUARTAS às 19h30",   icon: "✝️" },
];

// ── Cultos Semanais (página Eventos) ─────────────────────────────
export const CULTOS_SEMANAIS = [
  {
    titulo: "Escola Bíblica Dominical",
    descricao: "Estudo bíblico em classes por faixa etária.",
    dia: "Domingo", horario: "8h30", icon: "📖",
  },
  {
    titulo: "Culto de Adoração e Louvor – Manhã",
    descricao: "Culto principal com pregação da Palavra.",
    dia: "Domingo", horario: "10h30", icon: "🙏",
  },
  {
    titulo: "Culto de Adoração e Louvor – Noite",
    descricao: "Culto noturno de adoração e pregação.",
    dia: "Domingo", horario: "18h00", icon: "🌙",
  },
  {
    titulo: "Culto de Oração e Estudo Bíblico",
    descricao: "Momento de intercessão e aprofundamento na Palavra.",
    dia: "Quarta-feira", horario: "19h30", icon: "🙌",
  },
];

// ── Agenda Anual ─────────────────────────────────────────────────
// ✏️ Edite as datas e descrições conforme o calendário da sua igreja
// tipo: "culto" | "conferencia" | "retiro" | "social" | "especial" | "aniversario"
export type Evento = {
  mes: number;        // 1–12
  dia: string;        // ex: "15", "15–17", "último domingo"
  titulo: string;
  descricao: string;
  tipo: "culto" | "conferencia" | "retiro" | "social" | "especial" | "aniversario";
  youtube?: string;   // link opcional para transmissão
};

export const AGENDA_ANUAL: Evento[] = [
  // ── JANEIRO ──
  { mes: 1,  dia: "1",       titulo: "Culto de Ação de Graças – Ano Novo",   descricao: "Culto especial de gratidão pela passagem do ano.",       tipo: "especial" },
  { mes: 1,  dia: "último domingo", titulo: "Planejamento e Visão Anual",    descricao: "Culto de abertura do ano com apresentação da visão da igreja.", tipo: "culto" },

  // ── FEVEREIRO ──
  { mes: 2,  dia: "TBD",     titulo: "Semana de Oração",                     descricao: "Semana dedicada à intercessão e busca de Deus.",          tipo: "especial" },

  // ── MARÇO ──
  { mes: 3,  dia: "TBD",     titulo: "Retiro de Casais",                     descricao: "Encontro especial para casais da congregação.",            tipo: "retiro" },

  // ── ABRIL ──
  { mes: 4,  dia: "Sexta Santa", titulo: "Culto da Paixão de Cristo",        descricao: "Culto de meditação sobre o sacrifício de Jesus.",         tipo: "especial" },
  { mes: 4,  dia: "domingo",    titulo: "Culto de Ressurreição – Páscoa",    descricao: "Celebração da ressurreição de Jesus Cristo.",             tipo: "especial" },

  // ── MAIO ──
  { mes: 5,  dia: "2º domingo", titulo: "Culto das Mães",                    descricao: "Homenagem especial às mães da congregação.",              tipo: "especial" },
  { mes: 5,  dia: "TBD",       titulo: "Conferência de Mulheres",            descricao: "Conferência voltada para as mulheres da igreja.",         tipo: "conferencia" },

  // ── JUNHO ──
  { mes: 6,  dia: "TBD",     titulo: "Festa Junina / Confraternização",      descricao: "Evento de integração e comunhão da família da igreja.",   tipo: "social" },

  // ── JULHO ──
  { mes: 7,  dia: "TBD",     titulo: "Acampamento de Jovens",                descricao: "Retiro anual do ministério de jovens.",                   tipo: "retiro" },
  { mes: 7,  dia: "TBD",     titulo: "Escola Bíblica de Férias",             descricao: "EBF para crianças e adolescentes durante as férias.",     tipo: "especial" },

  // ── AGOSTO ──
  { mes: 8,  dia: "2º domingo", titulo: "Culto dos Pais",                    descricao: "Homenagem especial aos pais da congregação.",             tipo: "especial" },
  { mes: 8,  dia: "TBD",       titulo: "Conferência de Homens",              descricao: "Conferência voltada para os homens da igreja.",           tipo: "conferencia" },

  // ── SETEMBRO ──
  { mes: 9,  dia: "TBD",     titulo: "Retiro Espiritual Geral",              descricao: "Retiro anual de toda a congregação.",                     tipo: "retiro" },
  { mes: 9,  dia: "TBD",     titulo: "Semana da Pátria – Culto Cívico",     descricao: "Culto temático em homenagem à independência do Brasil.",  tipo: "culto" },

  // ── OUTUBRO ──
  { mes: 10, dia: "TBD",     titulo: "Congresso de Jovens",                  descricao: "Congresso anual voltado para jovens e adolescentes.",     tipo: "conferencia" },
  { mes: 10, dia: "último domingo", titulo: "Culto da Reforma",              descricao: "Celebração anual da Reforma Protestante.",                tipo: "especial" },

  // ── NOVEMBRO ──
  { mes: 11, dia: "TBD",     titulo: "Semana Missionária",                   descricao: "Semana dedicada ao trabalho missionário e evangelismo.",  tipo: "conferencia" },
  { mes: 11, dia: "TBD",     titulo: "Confraternização de Aniversariantes",  descricao: "Celebração dos aniversariantes do semestre.",             tipo: "social" },

  // ── DEZEMBRO ──
  { mes: 12, dia: "TBD",     titulo: "Culto de Natal",                       descricao: "Culto especial de celebração do nascimento de Jesus.",    tipo: "especial" },
  { mes: 12, dia: "TBD",     titulo: "Cantata de Natal",                     descricao: "Apresentação musical especial de Natal.",                 tipo: "especial" },
  { mes: 12, dia: "31",      titulo: "Culto de Réveillon",                   descricao: "Culto de despedida do ano com ação de graças.",           tipo: "especial" },
];

// ── Versículos do Carrossel ──────────────────────────────────────
export const VERSICULOS = [
  { text: "Pois Deus revelou a sua graça para dar a salvação a todos", ref: "Tito 2:11" },
  { text: "O Senhor é o meu pastor e nada me faltará",                ref: "Salmos 23:1" },
  { text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito", ref: "João 3:16" },
  { text: "Tudo posso naquele que me fortalece",                      ref: "Filipenses 4:13" },
  { text: "Sede fortes e corajosos. Não temais nem vos assusteis",    ref: "Deuteronômio 31:6" },
  { text: "Vinde a mim todos os que estais cansados e sobrecarregados", ref: "Mateus 11:28" },
];

// ── Google Maps ──────────────────────────────────────────────────
// ✏️ Configure no .env: VITE_MAPS_EMBED=...
export const MAPS_EMBED = import.meta.env.VITE_MAPS_EMBED || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2!2d-46.5756!3d-23.5489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b6a0b0b0b0b%3A0x0!2sRua%20do%20Orat%C3%B3rio%2C%202930%20-%20Mooca%2C%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1234567890";

// ── Pastores (timeline) ──────────────────────────────────────────
export type Pastor = {
  nome: string;
  periodo: string;
  cargo?: string;
  atual?: boolean;
  foto?: string;    // caminho em src/assets/
  telefone?: string;
  email?: string;
};

export const PASTORES: Pastor[] = [
  { nome: "Pr. Demétrio Coev",                 periodo: "5 anos e 6 meses"   },
  { nome: "Pr. Roque Monteiro de Andrade",     periodo: "8 anos e 10 meses"  },
  { nome: "Pr. Anatole Pyrilampo (interino)",  periodo: "4 meses"            },
  { nome: "Pr. Edgar Evangelista da Costa",    periodo: "15 anos e 2 meses"  },
  { nome: "Pr. Miguel Madeira e Silva",        periodo: "3 anos e 1 mês"     },
  { nome: "Pr. Demétrio Coev (interino)",      periodo: "1 ano e 5 meses"    },
  { nome: "Pr. Getúlio Gonçalves Ferreira Jr.", periodo: "1 ano e 11 meses"  },
  { nome: "Pr. Cornélio Dorta Bernardes",      periodo: "2 anos e 6 meses"   },
  { nome: "Pr. Paulo Roberto Sória",           periodo: "32 anos"            },
  {
    nome: "Pastor Sidney Roberto Machado da Silva",
    periodo: "Presidente em exercício desde 14/04/2024",
    cargo: "Pastor Presidente",
    atual: true,
    // foto: "pastor-sidney.jpg",  // ✏️ coloque em src/assets/ e descomente
    telefone: "(11) 99854-1972",
    email: "pastorsidney@iebam.org.br",
  },
];

// ── Galeria ───────────────────────────────────────────────────────
// ✏️ COMO ADICIONAR FOTOS REAIS:
//    1. Coloque os arquivos em:  src/assets/galeria/
//    2. Altere o src abaixo de ".svg" para ".jpg" (ou ".png")
//    3. Rode npm run dev para ver as mudanças
export type FotoGaleria = {
  src: string;
  titulo: string;
  categoria: "culto" | "eventos" | "jovens" | "missoes" | "edificio";
};

export const GALERIA: FotoGaleria[] = [
  // ── Cultos ──
  { src: "culto-domingo-manha.svg",  titulo: "Culto Dominical – Manhã",       categoria: "culto"    },
  { src: "culto-adoracao.svg",       titulo: "Culto de Adoração e Louvor",     categoria: "culto"    },
  { src: "culto-oracao.svg",         titulo: "Culto de Oração",                categoria: "culto"    },
  { src: "escola-biblica.svg",       titulo: "Escola Bíblica Dominical",       categoria: "culto"    },
  // ── Eventos ──
  { src: "conferencia-mulheres.svg", titulo: "Conferência de Mulheres",        categoria: "eventos"  },
  { src: "conferencia-homens.svg",   titulo: "Conferência de Homens",          categoria: "eventos"  },
  { src: "culto-natal.svg",          titulo: "Culto de Natal",                 categoria: "eventos"  },
  { src: "cantata-natal.svg",        titulo: "Cantata de Natal",               categoria: "eventos"  },
  // ── Jovens ──
  { src: "retiro-jovens.svg",        titulo: "Retiro de Jovens",               categoria: "jovens"   },
  { src: "congresso-jovens.svg",     titulo: "Congresso de Jovens",            categoria: "jovens"   },
  { src: "grupo-jovens.svg",         titulo: "Grupo de Jovens",                categoria: "jovens"   },
  // ── Missões ──
  { src: "missao-evangelismo.svg",   titulo: "Missão – Evangelismo",           categoria: "missoes"  },
  { src: "semana-missionaria.svg",   titulo: "Semana Missionária",             categoria: "missoes"  },
  // ── Edifício ──
  { src: "fachada-iebam.svg",        titulo: "Fachada da IEBAM",               categoria: "edificio" },
  { src: "entrada-iebam.svg",        titulo: "Entrada da Igreja",              categoria: "edificio" },
  { src: "salao-principal.svg",      titulo: "Salão Principal",                categoria: "edificio" },
];
export const NAVY  = "#1a2e5a";
export const GOLD  = "#c9a84c";
export const SERIF = "Georgia, 'Times New Roman', serif";