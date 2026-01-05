// Dados de gestação e dicas

export interface WeekTip {
  week: number;
  title: string;
  babyDevelopment: string;
  motherTip: string;
  warning?: string;
}

export const pregnancyTips: WeekTip[] = [
  {
    week: 1,
    title: "Semana 1 - Início da Jornada",
    babyDevelopment: "Ainda não há bebê, mas seu corpo está se preparando para a ovulação.",
    motherTip: "Comece a tomar ácido fólico e mantenha hábitos saudáveis.",
  },
  {
    week: 4,
    title: "Semana 4 - Confirmação",
    babyDevelopment: "O embrião tem cerca de 2mm. O coração começa a se formar.",
    motherTip: "Faça o teste de gravidez e agende sua primeira consulta pré-natal.",
  },
  {
    week: 8,
    title: "Semana 8 - Desenvolvimento Rápido",
    babyDevelopment: "O bebê tem cerca de 1,6cm. Dedos começam a se formar.",
    motherTip: "Náuseas são normais. Coma pequenas porções várias vezes ao dia.",
  },
  {
    week: 12,
    title: "Semana 12 - Fim do 1º Trimestre",
    babyDevelopment: "O bebê tem cerca de 5,4cm. Todos os órgãos estão formados.",
    motherTip: "Enjoos tendem a diminuir. Faça o ultrassom morfológico.",
  },
  {
    week: 16,
    title: "Semana 16 - Crescimento",
    babyDevelopment: "O bebê tem cerca de 11cm. Já consegue fazer caretas.",
    motherTip: "Você pode começar a sentir os primeiros movimentos do bebê.",
  },
  {
    week: 20,
    title: "Semana 20 - Metade da Gestação",
    babyDevelopment: "O bebê tem cerca de 16cm. Pode ouvir sons externos.",
    motherTip: "Converse e cante para o bebê. Ele já reconhece sua voz.",
  },
  {
    week: 24,
    title: "Semana 24 - Viabilidade",
    babyDevelopment: "O bebê tem cerca de 30cm. Pulmões em desenvolvimento.",
    motherTip: "Faça exercícios leves e mantenha-se hidratada.",
  },
  {
    week: 28,
    title: "Semana 28 - 3º Trimestre",
    babyDevelopment: "O bebê tem cerca de 37cm. Abre e fecha os olhos.",
    motherTip: "Comece a pensar no plano de parto e enxoval.",
  },
  {
    week: 32,
    title: "Semana 32 - Preparação",
    babyDevelopment: "O bebê tem cerca de 42cm. Ganhando peso rapidamente.",
    motherTip: "Descanse bastante. Durma de lado para melhor circulação.",
  },
  {
    week: 36,
    title: "Semana 36 - Reta Final",
    babyDevelopment: "O bebê tem cerca de 47cm. Posicionando-se para o parto.",
    motherTip: "Tenha a mala da maternidade pronta. O bebê pode nascer a qualquer momento.",
  },
  {
    week: 40,
    title: "Semana 40 - Hora do Encontro",
    babyDevelopment: "O bebê está pronto para nascer! Cerca de 50cm e 3,5kg.",
    motherTip: "Fique atenta aos sinais de trabalho de parto. Logo você conhecerá seu bebê!",
    warning: "Se passar de 41 semanas, procure seu médico imediatamente.",
  },
];

export interface CryReason {
  id: string;
  title: string;
  description: string;
  solutions: string[];
  icon: string;
}

export const cryReasons: CryReason[] = [
  {
    id: "fome",
    title: "Fome",
    description: "O choro é rítmico e insistente. O bebê pode levar as mãos à boca.",
    solutions: [
      "Ofereça o peito ou mamadeira",
      "Verifique se está mamando o suficiente",
      "Observe os sinais de fome antes do choro intenso",
    ],
    icon: "🍼",
  },
  {
    id: "sono",
    title: "Sono/Cansaço",
    description: "Choro irritado, bebê esfrega os olhos e boceja.",
    solutions: [
      "Leve para um ambiente calmo e escuro",
      "Embale suavemente",
      "Mantenha rotina de sono",
      "Evite estímulos excessivos",
    ],
    icon: "😴",
  },
  {
    id: "fralda",
    title: "Fralda Suja",
    description: "Choro súbito durante ou após fazer cocô/xixi.",
    solutions: [
      "Verifique e troque a fralda",
      "Limpe bem e aplique pomada se necessário",
      "Use fraldas de qualidade que absorvam bem",
    ],
    icon: "🧷",
  },
  {
    id: "colica",
    title: "Cólica",
    description: "Choro intenso e prolongado, geralmente no fim da tarde. Bebê encolhe as pernas.",
    solutions: [
      "Massageie a barriguinha em movimentos circulares",
      "Faça a posição do aviãozinho",
      "Compressa morna na barriga",
      "Consulte o pediatra sobre probióticos",
    ],
    icon: "😣",
  },
  {
    id: "calor-frio",
    title: "Calor ou Frio",
    description: "Bebê está suado ou com extremidades frias.",
    solutions: [
      "Ajuste as roupas do bebê",
      "Mantenha temperatura ambiente entre 20-22°C",
      "Toque a nuca do bebê para verificar temperatura",
    ],
    icon: "🌡️",
  },
  {
    id: "carinho",
    title: "Precisa de Colo",
    description: "Choro que para quando você pega no colo.",
    solutions: [
      "Pegue o bebê no colo",
      "Use sling ou canguru",
      "Contato pele a pele",
      "Não tenha medo de 'acostumar mal' - bebês precisam de afeto",
    ],
    icon: "🤗",
  },
  {
    id: "dor",
    title: "Dor ou Desconforto",
    description: "Choro agudo e súbito, diferente do habitual.",
    solutions: [
      "Verifique se há algo machucando (etiqueta, fio de cabelo)",
      "Observe febre ou outros sintomas",
      "Se persistir, procure o pediatra",
    ],
    icon: "🩺",
  },
];

export interface FirstTimeTip {
  category: string;
  tips: string[];
}

export const firstTimeTips: FirstTimeTip[] = [
  {
    category: "Primeiros Dias",
    tips: [
      "Não existe mãe perfeita, existe mãe presente. Seja gentil consigo mesma.",
      "Aceite ajuda de familiares e amigos. Você não precisa fazer tudo sozinha.",
      "Durma quando o bebê dormir. O sono é essencial para sua recuperação.",
      "Amamentação pode ser desafiadora no início. Procure ajuda de consultora se necessário.",
    ],
  },
  {
    category: "Cuidados com o Bebê",
    tips: [
      "O coto umbilical cai entre 7-15 dias. Mantenha limpo e seco.",
      "Banho pode ser dado após a queda do coto, mas não é obrigatório diariamente.",
      "Bebês regurgitam - é normal! Mantenha-o na vertical após mamar.",
      "Não compare seu bebê com outros. Cada um tem seu ritmo de desenvolvimento.",
    ],
  },
  {
    category: "Amamentação",
    tips: [
      "A pega correta evita dor e rachaduras. O bebê deve abocanhar toda a aréola.",
      "Amamente em livre demanda, sem horários fixos nos primeiros meses.",
      "Hidrate-se muito! Amamentação dá sede.",
      "Leite materno é suficiente até os 6 meses - não precisa água ou chá.",
    ],
  },
  {
    category: "Saúde Mental",
    tips: [
      "Baby blues é comum nos primeiros dias. Se durar mais de 2 semanas, procure ajuda.",
      "Não tenha vergonha de pedir ajuda psicológica. Cuidar da mente é essencial.",
      "Reserve um tempo para você, mesmo que sejam 15 minutos.",
      "Converse com outras mães. Você não está sozinha nessa jornada.",
    ],
  },
  {
    category: "Rotina",
    tips: [
      "Estabeleça rotina de sono desde cedo, mas seja flexível.",
      "Crie rituais para diferenciar dia e noite (luz, barulho).",
      "Não precisa silêncio absoluto para o bebê dormir durante o dia.",
      "Saia de casa! Ar fresco faz bem para você e para o bebê.",
    ],
  },
  {
    category: "Segurança",
    tips: [
      "Sempre coloque o bebê para dormir de barriga para cima.",
      "Não use travesseiros, cobertores soltos ou protetores de berço.",
      "Nunca deixe o bebê sozinho em lugares altos (cama, trocador).",
      "Cadeirinha no carro desde a primeira viagem - é lei e salva vidas.",
    ],
  },
];
