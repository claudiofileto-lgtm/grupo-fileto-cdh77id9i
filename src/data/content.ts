export interface PracticeAreaHighlight {
  title: string
  description: string
}

export interface PracticeArea {
  id: string
  slug: string
  title: string
  icon: string
  description: string
  fullDescription: string
  highlights?: PracticeAreaHighlight[]
}

export const practiceAreas: PracticeArea[] = [
  {
    id: '1',
    slug: 'tributario',
    title: 'Tributário',
    icon: 'Landmark',
    description:
      'Planejamento fiscal estratégico, recuperação de créditos e defesa no contencioso tributário.',
    fullDescription:
      'Oferecemos assessoria completa em matéria tributária com foco em inteligência fiscal, eficiência e mitigação de riscos. Atuamos com planejamento tributário, recuperação de tributos pagos indevidamente, consultoria preventiva e defesa contenciosa em processos administrativos e judiciais contra autuações e execuções fiscais.',
  },
  {
    id: '2',
    slug: 'direito-empresarial',
    title: 'Direito Empresarial',
    icon: 'Building2',
    description: 'Consultoria para estruturação, fusões, aquisições e governança corporativa.',
    fullDescription:
      'Assessoramos empresas de diversos setores em suas operações diárias e estruturais. Desde a constituição de sociedades, passando por reorganizações societárias (M&A) até a implementação de práticas modernas de governança corporativa.',
  },
  {
    id: '3',
    slug: 'financeiro',
    title: 'Financeiro',
    icon: 'DollarSign',
    description:
      'Home Equity (Crédito com Garantia de Imóveis) para empresas, empresários, pessoas físicas e condomínios.',
    fullDescription:
      'Atuamos na estruturação e condução de operações de Home Equity — o crédito com garantia de imóvel — para empresas, empresários, pessoas físicas e condomínios. Transformamos o valor imobilizado em imóveis em capital líquido, com taxas competitivas, prazos alongados e condições sob medida, viabilizando investimentos, capital de giro, expansão de negócios, quitação de passivos e projetos das mais diversas naturezas. Cuidamos de toda a esteira jurídica: due diligence do imóvel dado em garantia, constituição e liberação de alienação fiduciária, contratos, cessões, anuências e a interlocução com instituições financeiras, assegurando celeridade e segurança jurídica em todas as etapas.',
    highlights: [
      {
        title: 'O que é Home Equity',
        description:
          'O Home Equity, ou Crédito com Garantia de Imóvel, é uma modalidade de crédito em que o imóvel é oferecido como garantia de pagamento, viabilizando condições mais atrativas — taxas menores, prazos mais longos e limites superiores aos das modalidades tradicionais.',
      },
      {
        title: 'Vantagens',
        description:
          'Acesso a capital a custos reduzidos, prazos de pagamento alongados, manutenção da propriedade do imóvel e liquidez para investimentos, capital de giro, expansão de negócios e reestruturação de dívidas.',
      },
      {
        title: 'Público Atendido',
        description:
          'Empresas, empresários, pessoas físicas e condomínios que buscam captar recursos com lastro imobiliário, com soluções ajustadas ao perfil e à finalidade de cada cliente.',
      },
      {
        title: 'Esteira Jurídica Completa',
        description:
          'Due diligence do imóvel, constituição de alienação fiduciária, contratos, cessões, anuências e interlocução com instituições financeiras, garantindo celeridade e segurança jurídica em todas as etapas.',
      },
    ],
  },
  {
    id: '4',
    slug: 'direito-tributario',
    title: 'Tributário',
    icon: 'Landmark',
    description: 'Planejamento fiscal e defesa em execuções e autuações fiscais.',
    fullDescription:
      'Oferecemos soluções inteligentes para otimização da carga tributária. Atuamos fortemente no contencioso administrativo e judicial, defendendo os interesses de nossos clientes contra autuações e buscando a recuperação de créditos.',
  },
]

export const teamMembers = [
  {
    id: '1',
    slug: 'carlos-henrique',
    name: 'Carlos Henrique',
    role: 'Sócio Fundador',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=12',
    bio: 'Com mais de 20 anos de experiência em Direito Empresarial, Carlos tem liderado grandes operações de M&A e reestruturações complexas no Brasil.',
    expertise: ['Direito Empresarial', 'M&A', 'Governança', 'Home Equity'],
    email: 'carlos@hmgcadvogados.com.br',
  },
  {
    id: '2',
    slug: 'marina-gomes',
    name: 'Marina Gomes',
    role: 'Sócia Diretora',
    image: 'https://img.usecurling.com/ppl/large?gender=female&seed=45',
    bio: 'Especialista em Tributário e Mestre pela USP. Marina atua na vanguarda do planejamento fiscal para multinacionais.',
    expertise: ['Tributário', 'Planejamento Fiscal'],
    email: 'marina@hmgcadvogados.com.br',
  },
  {
    id: '3',
    slug: 'roberto-costa',
    name: 'Roberto Costa',
    role: 'Sócio',
    image: 'https://img.usecurling.com/ppl/large?gender=male&seed=33',
    bio: 'Focado em litígios civis de alta complexidade. Roberto possui vasta experiência em tribunais superiores e arbitragem.',
    expertise: ['Direito Civil', 'Contencioso Estratégico', 'Arbitragem'],
    email: 'roberto@hmgcadvogados.com.br',
  },
]
