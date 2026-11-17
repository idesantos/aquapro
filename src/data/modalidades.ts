import type { ImageMetadata } from 'astro';
import conteudo from './modalidades-conteudo.json';

import natacaoBaby from '../assets/img/modalidades/natacao-baby.jpg';
import natacaoInfantil from '../assets/img/modalidades/natacao-infantil.jpg';
import natacaoAdulto from '../assets/img/modalidades/natacao-adulto.jpg';
import hidroginastica from '../assets/img/modalidades/hidroginastica.jpg';
import musculacao from '../assets/img/modalidades/musculacao.jpg';
import pilates from '../assets/img/modalidades/pilates.jpg';

export type Categoria = 'agua' | 'kids' | 'academia';

type Conteudo = {
  titulo: string;
  descricao: string;
  beneficios: { lista?: string[]; texto?: string };
};

// Aulas que existem dentro de uma modalidade (bloco "Escolha a sua aula").
export type Aula = { id: string; nome: string; texto: string; imagem: ImageMetadata };

export type Modalidade = Conteudo & {
  slug: string;
  nome: string;
  resumo: string;
  // Cada modalidade fica em uma categoria só, para não aparecer repetida no menu.
  categorias: [Categoria];
  imagem: ImageMetadata;
  diferenciais: string[];
  aulas?: Aula[];
};

// Só fatos que o site antigo da Aquapro informa (nada de estrutura que não sabemos se existe).
const EXPERIMENTAL = 'Aula experimental para conhecer';
const DIF = {
  baby: [
    'A partir dos 6 meses de idade',
    'Aulas com a presença de acompanhante',
    'Metodologia Aquativa',
    EXPERIMENTAL,
  ],
  infantil: [
    'Metodologia Aquativa',
    '7 níveis, cada um com o seu mascote',
    'Avaliação periódica do nível das crianças',
    'Certificado e touca nova a cada mudança de nível',
    EXPERIMENTAL,
  ],
  adulto: [
    'Para quem ainda não sabe nadar ou tem trauma com a água',
    'Aulas de acordo com o seu nível',
    'Acesso a todas as atividades',
    'Preço mensal acessível',
    EXPERIMENTAL,
  ],
  hidro: [
    'Exercício aeróbico sem impacto',
    'Para todas as idades',
    'Acesso a todas as atividades',
    'Preço mensal acessível',
    EXPERIMENTAL,
  ],
  academia: [
    'Aulas de acordo com o seu nível',
    'Acesso a todas as atividades',
    'Preço mensal acessível',
    EXPERIMENTAL,
  ],
};

const meta: Omit<Modalidade, keyof Conteudo>[] = [
  {
    slug: 'natacao-baby',
    nome: 'Natação Baby',
    resumo: 'A partir dos 6 meses, com acompanhante na água.',
    categorias: ['kids'],
    imagem: natacaoBaby,
    diferenciais: DIF.baby,
  },
  {
    slug: 'natacao-infantil',
    nome: 'Natação Infantil',
    resumo: 'Aprender a nadar brincando, com a Metodologia Aquativa.',
    categorias: ['kids'],
    imagem: natacaoInfantil,
    diferenciais: DIF.infantil,
  },
  {
    slug: 'natacao-adulto',
    nome: 'Natação Adulto',
    resumo: 'Para aprender a nadar ou evoluir, em qualquer idade.',
    categorias: ['agua'],
    imagem: natacaoAdulto,
    diferenciais: DIF.adulto,
  },
  {
    slug: 'hidroginastica',
    nome: 'Hidroginástica',
    resumo: 'Exercício aeróbico sem impacto, para todas as idades.',
    categorias: ['agua'],
    imagem: hidroginastica,
    diferenciais: DIF.hidro,
  },
  {
    slug: 'musculacao',
    nome: 'Musculação',
    resumo: 'Força, postura e mais qualidade de vida.',
    categorias: ['academia'],
    imagem: musculacao,
    diferenciais: DIF.academia,
  },
  {
    slug: 'pilates-studio',
    nome: 'Pilates Studio',
    resumo: 'Postura, flexibilidade e consciência corporal.',
    categorias: ['academia'],
    imagem: pilates,
    diferenciais: DIF.academia,
  },
];

const textos = conteudo as Record<string, Conteudo>;

export const modalidades: Modalidade[] = meta.map((m) => ({ ...textos[m.slug], ...m }));

export const categoriaNome: Record<Categoria, string> = {
  agua: 'Na água',
  kids: 'Natação kids',
  academia: 'Academia',
};

