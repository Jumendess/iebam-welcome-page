// ═══════════════════════════════════════════════════════════════
// CONFIGURAÇÕES DA IEBAM — gerado pelo painel admin
// ═══════════════════════════════════════════════════════════════

export const IGREJA_NOME          = "IEBAM";
export const IGREJA_NOME_COMPLETO = "Igreja Evangélica Batista no Alto da Mooca";
export const IGREJA_SLOGAN        = "Online como porta de entrada. Presença e comunhão no presencial.2026 teste";
export const SITE_OFICIAL         = "https://www.iebam.org.br";

export const ENDERECO_RUA    = "Rua do Oratório, 2930";
export const ENDERECO_BAIRRO = "Alto da Mooca";
export const ENDERECO_CIDADE = "São Paulo – CEP 03165-000";

export const WHATSAPP_NUMERO     = import.meta.env.VITE_WHATSAPP_NUMERO || "+55 11 99854-1972";
export const WHATSAPP_URL        = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMERO || "5511998541972"}?text=Oi!%20Vim%20pelo%20site%20e%20queria%20mais%20informa%C3%A7%C3%B5es.`;
export const WHATSAPP_URL_VISITA = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMERO || "5511998541972"}?text=Oi!%20Sou%20novo(a)%20e%20queria%20visitar%20domingo.%20Como%20funciona%3F`;
export const EMAIL               = import.meta.env.VITE_EMAIL || "contato@iebam.org.br";

export const INSTAGRAM_HANDLE = "@igrejabatistaaltodamooca";
export const INSTAGRAM_URL    = import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/igrejabatistaaltodamooca";
export const FACEBOOK_HANDLE  = "/iebam1950";
export const FACEBOOK_URL     = import.meta.env.VITE_FACEBOOK_URL  || "https://web.facebook.com/iebam1950/";
export const YOUTUBE_HANDLE   = "IEBAM Vídeo";
export const YOUTUBE_URL      = import.meta.env.VITE_YOUTUBE_URL   || "https://www.youtube.com/@iebam";

export const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || "UCxxxxxxxxxxxxxxxxxxxxxxx";
export const YOUTUBE_API_KEY    = import.meta.env.VITE_YOUTUBE_API_KEY    || "";

export const CULTOS = [
  {
    "titulo": "Escola Bíblica Dominical",
    "horario": "DOMINGOS às 8h30",
    "icon": "📖"
  },
  {
    "titulo": "Culto de Adoração e Louvor",
    "horario": "DOMINGOS às 10h30 e às 18h",
    "icon": "🙏"
  },
  {
    "titulo": "Culto de Oração e Estudo Bíblico",
    "horario": "QUARTAS às 19h30",
    "icon": "✝️"
  }
];

export const CULTOS_SEMANAIS = [
  {
    "titulo": "Escola Bíblica Dominical",
    "descricao": "Estudo bíblico em classes por faixa etária.",
    "dia": "Domingo",
    "horario": "8h30",
    "icon": "📖"
  },
  {
    "titulo": "Culto de Adoração e Louvor – Manhã",
    "descricao": "Culto principal com pregação da Palavra.",
    "dia": "Domingo",
    "horario": "10h30",
    "icon": "🙏"
  },
  {
    "titulo": "Culto de Adoração e Louvor – Noite",
    "descricao": "Culto noturno de adoração e pregação.",
    "dia": "Domingo",
    "horario": "18h00",
    "icon": "🌙"
  },
  {
    "titulo": "Culto de Oração e Estudo Bíblico",
    "descricao": "Momento de intercessão e aprofundamento na Palavra.",
    "dia": "Quarta-feira",
    "horario": "19h30",
    "icon": "🙌"
  }
];

export type Evento = {
  mes: number; dia: string; titulo: string; descricao: string;
  tipo: "culto"|"conferencia"|"retiro"|"social"|"especial"|"aniversario";
  youtube?: string;
};
export const AGENDA_ANUAL: Evento[] = [
  {
    "mes": 1,
    "dia": "1",
    "titulo": "Culto de Ação de Graças – Ano Novo",
    "descricao": "Culto especial de gratidão pela passagem do ano.",
    "tipo": "especial"
  },
  {
    "mes": 1,
    "dia": "último domingo",
    "titulo": "Planejamento e Visão Anual",
    "descricao": "Culto de abertura do ano com apresentação da visão da igreja.",
    "tipo": "culto"
  },
  {
    "mes": 2,
    "dia": "TBD",
    "titulo": "Semana de Oração",
    "descricao": "Semana dedicada à intercessão e busca de Deus.",
    "tipo": "especial"
  },
  {
    "mes": 3,
    "dia": "TBD",
    "titulo": "Retiro de Casais",
    "descricao": "Encontro especial para casais da congregação.",
    "tipo": "retiro"
  },
  {
    "mes": 4,
    "dia": "Sexta Santa",
    "titulo": "Culto da Paixão de Cristo",
    "descricao": "Culto de meditação sobre o sacrifício de Jesus.",
    "tipo": "especial"
  },
  {
    "mes": 4,
    "dia": "domingo",
    "titulo": "Culto de Ressurreição – Páscoa",
    "descricao": "Celebração da ressurreição de Jesus Cristo.",
    "tipo": "especial"
  },
  {
    "mes": 5,
    "dia": "2º domingo",
    "titulo": "Culto das Mães",
    "descricao": "Homenagem especial às mães da congregação.",
    "tipo": "especial"
  },
  {
    "mes": 5,
    "dia": "TBD",
    "titulo": "Conferência de Mulheres",
    "descricao": "Conferência voltada para as mulheres da igreja.",
    "tipo": "conferencia"
  },
  {
    "mes": 6,
    "dia": "TBD",
    "titulo": "Festa Junina / Confraternização",
    "descricao": "Evento de integração e comunhão da família da igreja.",
    "tipo": "social"
  },
  {
    "mes": 7,
    "dia": "TBD",
    "titulo": "Acampamento de Jovens",
    "descricao": "Retiro anual do ministério de jovens.",
    "tipo": "retiro"
  },
  {
    "mes": 7,
    "dia": "TBD",
    "titulo": "Escola Bíblica de Férias",
    "descricao": "EBF para crianças e adolescentes durante as férias.",
    "tipo": "especial"
  },
  {
    "mes": 8,
    "dia": "2º domingo",
    "titulo": "Culto dos Pais",
    "descricao": "Homenagem especial aos pais da congregação.",
    "tipo": "especial"
  },
  {
    "mes": 8,
    "dia": "TBD",
    "titulo": "Conferência de Homens",
    "descricao": "Conferência voltada para os homens da igreja.",
    "tipo": "conferencia"
  },
  {
    "mes": 9,
    "dia": "TBD",
    "titulo": "Retiro Espiritual Geral",
    "descricao": "Retiro anual de toda a congregação.",
    "tipo": "retiro"
  },
  {
    "mes": 9,
    "dia": "TBD",
    "titulo": "Semana da Pátria – Culto Cívico",
    "descricao": "Culto temático em homenagem à independência do Brasil.",
    "tipo": "culto"
  },
  {
    "mes": 10,
    "dia": "TBD",
    "titulo": "Congresso de Jovens",
    "descricao": "Congresso anual voltado para jovens e adolescentes.",
    "tipo": "conferencia"
  },
  {
    "mes": 10,
    "dia": "último domingo",
    "titulo": "Culto da Reforma",
    "descricao": "Celebração anual da Reforma Protestante.",
    "tipo": "especial"
  },
  {
    "mes": 11,
    "dia": "TBD",
    "titulo": "Semana Missionária",
    "descricao": "Semana dedicada ao trabalho missionário e evangelismo.",
    "tipo": "conferencia"
  },
  {
    "mes": 11,
    "dia": "TBD",
    "titulo": "Confraternização de Aniversariantes",
    "descricao": "Celebração dos aniversariantes do semestre.",
    "tipo": "social"
  },
  {
    "mes": 12,
    "dia": "TBD",
    "titulo": "Culto de Natal",
    "descricao": "Culto especial de celebração do nascimento de Jesus.",
    "tipo": "especial"
  },
  {
    "mes": 12,
    "dia": "TBD",
    "titulo": "Cantata de Natal",
    "descricao": "Apresentação musical especial de Natal.",
    "tipo": "especial"
  },
  {
    "mes": 12,
    "dia": "31",
    "titulo": "Culto de Réveillon",
    "descricao": "Culto de despedida do ano com ação de graças.",
    "tipo": "especial"
  }
];

export const VERSICULOS = [
  {
    "text": "Pois Deus revelou a sua graça para dar a salvação a todos",
    "ref": "Tito 2:11"
  },
  {
    "text": "O Senhor é o meu pastor e nada me faltará",
    "ref": "Salmos 23:1"
  },
  {
    "text": "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito",
    "ref": "João 3:16"
  },
  {
    "text": "Tudo posso naquele que me fortalece",
    "ref": "Filipenses 4:13"
  },
  {
    "text": "Sede fortes e corajosos. Não temais nem vos assusteis",
    "ref": "Deuteronômio 31:6"
  },
  {
    "text": "Vinde a mim todos os que estais cansados e sobrecarregados",
    "ref": "Mateus 11:28"
  }
];

export const MAPS_EMBED = import.meta.env.VITE_MAPS_EMBED || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2!2d-46.5756!3d-23.5489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b6a0b0b0b0b%3A0x0!2sRua%20do%20Orat%C3%B3rio%2C%202930%20-%20Mooca%2C%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1234567890";

export type Pastor = { nome: string; periodo: string; cargo?: string; atual?: boolean; foto?: string; telefone?: string; email?: string };
export const PASTORES: Pastor[] = [
  {
    "nome": "Pr. Demétrio Coev",
    "periodo": "5 anos e 6 meses"
  },
  {
    "nome": "Pr. Roque Monteiro de Andrade",
    "periodo": "8 anos e 10 meses"
  },
  {
    "nome": "Pr. Anatole Pyrilampo (interino)",
    "periodo": "4 meses"
  },
  {
    "nome": "Pr. Edgar Evangelista da Costa",
    "periodo": "15 anos e 2 meses"
  },
  {
    "nome": "Pr. Miguel Madeira e Silva",
    "periodo": "3 anos e 1 mês"
  },
  {
    "nome": "Pr. Demétrio Coev (interino)",
    "periodo": "1 ano e 5 meses"
  },
  {
    "nome": "Pr. Getúlio Gonçalves Ferreira Jr.",
    "periodo": "1 ano e 11 meses"
  },
  {
    "nome": "Pr. Cornélio Dorta Bernardes",
    "periodo": "2 anos e 6 meses"
  },
  {
    "nome": "Pr. Paulo Roberto Sória",
    "periodo": "32 anos"
  },
  {
    "nome": "Pastor Sidney Roberto Machado da Silva",
    "periodo": "Presidente em exercício desde 14/04/2024",
    "cargo": "Pastor Presidente",
    "atual": true,
    "telefone": "(11) 99854-1972",
    "email": "pastorsidney@iebam.org.br"
  }
];

export type FotoGaleria = { src: string; titulo: string; categoria: "culto"|"eventos"|"jovens"|"missoes"|"edificio" };
export const GALERIA: FotoGaleria[] = [];

export const NAVY  = "#1a2e5a";
export const GOLD  = "#c9a84c";
export const SERIF = "Georgia, 'Times New Roman', serif";

export const TEXTOS_IGREJA = [
  {
    "titulo": "Somos uma Igreja",
    "texto": "Igreja é um grupo de pessoas que se unem em torno da pessoa de Jesus Cristo. Isto é, somos uma ASSEMBLEIA de cristãos que comungamos a mesma fé dos apóstolos de Jesus. Nós reconhecemos que Jesus Cristo é nosso Senhor e Salvador pessoal. Procuramos seguir seus ensinamentos, permanecendo fiéis ao que temos na Bíblia Sagrada. Costumamos chamar uns aos outros de irmãos, pois tivemos a experiência do nosso nascimento espiritual, tornando-nos assim filhos de Deus. Nós nos reunimos para louvar a Deus, cultivando Seu santo nome e estudando Sua Palavra."
  },
  {
    "titulo": "Somos uma Igreja Evangélica",
    "texto": "Para nós a Bíblia é a única fundamento da nossa fé. Sabemos que a Bíblia é a revelação de Deus para os homens; podemos assim conhecer Deus pelo que Ele mesmo revelou. Seus atos através da Bíblia é o que nos submetermos ao que nela está escrito. O evangelho é a boas novas para nossa vida e para cada pessoa que o receber. Assim como os doze apóstolos de Jesus, saímos do evangelismo à nossa missão; sabemos que podem transformar a si todos, por isso procuramos divulgar isso ao máximo. O Novo Testamento fala das boas novas de Jesus."
  },
  {
    "titulo": "Somos uma Igreja Evangélica Batista",
    "texto": "Os batistas são conhecidos no mundo todo. São como um ramo das grandes igrejas que é o cristianismo. São bem conhecidos no Brasil, são ainda mais nos EUA, na Inglaterra e na Alemanha, como também na Romênia, na Índia e na Rússia. Cremos que Jesus Cristo é o único meio de salvação. Só pela Graça somos salvos por meio da fé. Uma de nossas grandes convicções é que ninguém nasce cristão, mas que cada um é chamado a se tornar cristão por sua fé pessoal em Jesus. É pelo encontro com Jesus Cristo que o homem pode ter um relacionamento direto com Deus."
  },
  {
    "titulo": "Somos defensores da liberdade individual",
    "texto": "Na Igreja Batista não há hierarquia: só Jesus Cristo é o Senhor. Ele é o verdadeiro chefe da Igreja. A mensagem dos batistas é uma mensagem de LIBERDADE. A Igreja não pode assumir um poder temporal, pois sua vocação é proclamar o amor, a fé e a eterna esperança do retorno de Cristo."
  },
  {
    "titulo": "Uma Igreja Autônoma Independente",
    "texto": "Nosso desejo como Igreja local é a consecução de objetivos mais amplos que os limites de nosso próprio bairro ou comunidade. Portanto, nós unimos, pondo mãos de solidariedade e comunhão com igrejas que têm os mesmos princípios e os mesmos objetivos, para atingirmos o homem em sua totalidade — corpo, mente e espírito — e em todo lugar para levar a Palavra."
  },
  {
    "titulo": "Uma Igreja Evangélica Batista no Alto da Mooca",
    "texto": "A Igreja Evangélica Batista no Alto da Mooca foi organizada com 16 membros no dia 02/12/1950, pertencendo hoje aproximadamente 400 pessoas entre membros e profissionais. A IEBAM é uma sociedade sem fins lucrativos, registrada no Cartório de Registro Civil de Pessoas Jurídicas de São Paulo. É soberana, autônoma e independente, não estando subordinada a nenhuma outra Igreja ou entidade, reconhecendo exclusivamente a autoridade de Jesus Cristo expressas nas Sagradas Escrituras."
  }
];
