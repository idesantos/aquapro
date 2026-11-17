// Dados institucionais — fonte única. Tudo que aparece em mais de uma página mora aqui.
// Fonte: site antigo da Aquapro (aquapronatacao.com.br), novembro de 2026.

export const site = {
  nome: 'Aquapro Natação',
  nomeCurto: 'Aquapro',
  slogan: 'Sua academia de natação para a família toda',
  descricao:
    'No coração da Freguesia do Ó, a Aquapro proporciona saúde e bem-estar através da atividade física. Uma academia de natação para a família toda, com natação para bebês, crianças e adultos, hidroginástica, musculação e Pilates Studio.',
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

// Todos os botões de WhatsApp abrem com a mesma frase (pedido do Ide em 17/11/2026).
// Só o formulário do contato acrescenta o que a pessoa preencheu, depois da frase.
export const MSG_WHATSAPP = 'Vim do site e gostaria de saber mais';

export function whatsappLink(detalhes?: string) {
  const texto = detalhes ? `${MSG_WHATSAPP}\n\n${detalhes}` : MSG_WHATSAPP;
  return `https://api.whatsapp.com/send?phone=${site.whatsapp.numero}&text=${encodeURIComponent(texto)}`;
}

// Os destaques do site antigo, mais a metodologia (a mesma das academias Aquacenter, a pedido do Ide).
export const diferenciaisAcademia = [
  'A academia que nasceu com o bairro',
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
    'A Aquapro nasceu com a Freguesia do Ó e, no coração do bairro, proporciona saúde e bem-estar através da atividade física. Reúne, num só lugar, natação para bebês, crianças e adultos, hidroginástica, musculação e Pilates Studio.',
    'As aulas acontecem de acordo com o nível de cada aluno, e o plano dá acesso a todas as atividades, com preço mensal acessível. Venha nos conhecer com uma aula experimental da modalidade da sua escolha.',
  ],
};
