// Dados institucionais — fonte única. Tudo que aparece em mais de uma página mora aqui.
// Fonte: site antigo da Aquapro (aquapronatacao.com.br), novembro de 2026.

export const site = {
  nome: 'Aquapro Natação',
  nomeCurto: 'Aquapro',
  experiencia: 'Há mais de 30 anos',
  slogan: 'Sua academia de natação para a família toda',
  descricao:
    'Estamos há mais de 30 anos proporcionando saúde e bem-estar através da atividade física. Uma academia de natação para a família toda na Freguesia do Ó, com natação para bebês, crianças e adultos, hidroginástica, musculação e Pilates Studio.',
  razaoSocial: 'Freguesia Natação Ltda',
  cnpj: '48.257.680/0001-50',
  endereco: {
    rua: 'Rua Antônio de Couros, 173',
    bairro: 'Freguesia do Ó',
    cidade: 'São Paulo',
    uf: 'SP',
    cep: '02726-000',
    lat: -23.4998438,
    lng: -46.6880969,
  },
  // O Ide definiu o (11) 92627-1261 como número principal (telefone e WhatsApp).
  telefone: { exibicao: '(11) 92627-1261', link: 'tel:+5511926271261' },
  whatsapp: { exibicao: '(11) 92627-1261', numero: '5511926271261' },
  email: 'academiaaquapro@gmail.com',
  instagram: 'https://www.instagram.com/aquaproacademia/',
  facebook: 'https://www.facebook.com/aquaproacademia',
  mapsRota:
    'https://www.google.com/maps/dir/?api=1&destination=Rua+Ant%C3%B4nio+de+Couros,+173+-+Vila+Palmeiras,+S%C3%A3o+Paulo+-+SP,+02726-000',
  mapsEmbed:
    'https://maps.google.com/maps?q=Rua%20Ant%C3%B4nio%20de%20Couros%2C%20173%20-%20S%C3%A3o%20Paulo%20-%20SP%2C%2002726-000&t=m&z=16&output=embed&iwloc=near',
};

// Funcionamento: o site antigo não informa os horários da academia. Com a lista vazia,
// os blocos de funcionamento somem e o site manda consultar pelo WhatsApp.
// Para preencher: linhas para exibir + porDia (0 = domingo) → [abre, fecha] em minutos.
export const funcionamento: {
  linhas: { dias: string; horario: string }[];
  porDia: Record<number, [number, number] | null> | null;
} = {
  linhas: [],
  porDia: null,
};

export const MSG_AULA_GRATIS = 'Olá! Gostaria de agendar uma aula experimental.';

export const MSG_INFO_ACADEMIA = 'Olá! Gostaria de saber mais sobre a Aquapro.';

export function whatsappLink(mensagem: string = MSG_AULA_GRATIS) {
  return `https://api.whatsapp.com/send?phone=${site.whatsapp.numero}&text=${encodeURIComponent(mensagem)}`;
}

// Os cinco destaques do site antigo, mais a metodologia (a mesma das academias Aquacenter, a pedido do Ide).
export const diferenciaisAcademia = [
  'Mais de 30 anos proporcionando saúde e bem-estar',
  'Metodologia Aquativa na natação infantil',
  'Aulas de acordo com o seu nível',
  'Acesso a todas as atividades',
  'Preço mensal acessível',
  'Ambientes que inspiram felicidade',
  'Aula experimental na modalidade da sua escolha',
];

export const sobre = {
  titulo: 'Sua academia de natação para a família toda.',
  paragrafos: [
    'Estamos há mais de 30 anos proporcionando saúde e bem-estar através da atividade física. A Aquapro fica na Freguesia do Ó e reúne, num só lugar, natação para bebês, crianças e adultos, hidroginástica, musculação e Pilates Studio.',
    'As aulas acontecem de acordo com o nível de cada aluno, e o plano dá acesso a todas as atividades, com preço mensal acessível. Venha nos conhecer com uma aula experimental da modalidade da sua escolha.',
  ],
};
