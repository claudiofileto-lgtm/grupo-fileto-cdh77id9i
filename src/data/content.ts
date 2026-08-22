export interface PracticeAreaHighlight {
  title: string
  description: string
}

export interface PracticeAreaStat {
  value: string
  label: string
  icon: string
}

export interface PracticeAreaStep {
  number: string
  title: string
  description?: string
}

export interface PracticeAreaMethodSection {
  eyebrow: string
  title: string
  intro?: string
  steps: PracticeAreaStep[]
}

export interface PracticeAreaDetailSection {
  eyebrow: string
  title: string
  body?: string
  bullets?: string[]
}

export interface PracticeArea {
  id: string
  slug: string
  title: string
  icon: string
  description: string
  fullDescription: string
  highlights?: PracticeAreaHighlight[]
  // Rich detail content (Inteligência Tributária)
  subtitle?: string
  aboutSection?: PracticeAreaDetailSection
  stats?: PracticeAreaStat[]
  method?: PracticeAreaMethodSection
  differentials?: PracticeAreaDetailSection
  scenario?: PracticeAreaDetailSection
}

export const practiceAreas: PracticeArea[] = [
  {
    id: '1',
    slug: 'inteligencia-tributaria',
    title: 'Inteligência Tributária',
    icon: 'Landmark',
    description: '',
    fullDescription: '',
    subtitle:
      'Especialista na área tributária, o Grupo Fileto é Parceiro da AG CAPITAL TAXTECH LTDA., a Primeira TaxTech do Brasil, empresa referência em tecnologia tributária desde 2010, que detém Tecnologia Proprietária para identificação de ativos ocultos nos recolhimentos tributários, gerando fluxo de caixa imediato para empresas.',
    aboutSection: {
      eyebrow: 'Quem somos',
      title: 'A primeira TaxTech do Brasil',
      body: 'O Grupo Fileto mantém parceria legítima e contratual com a empresa referência em tecnologia tributária desde 2010. Uma relação séria e formal que entrega aos nossos clientes melhores resultados e maior segurança. Com mais de 15 anos de mercado, utilizamos tecnologia proprietária para extrair 100% das oportunidades ainda não aproveitadas por empresas do Lucro Real, gerando fluxo de caixa imediato e seguro.',
      bullets: [
        'Somos a primeira TaxTech do Brasil',
        'Há mais de 15 anos gerando fluxo de caixa para empresas de todo o Brasil',
        'Tecnologia pioneira para identificação de ativos ocultos em tributos pagos a maior nos últimos 5 anos',
        'Referência em compliance previdenciário e identificação de ativos ocultos na folha de pagamento',
        'Especialistas em impostos diretos, indiretos e Reforma Tributária',
        'Tecnologia proprietária para extrair 100% das oportunidades ainda não aproveitadas por empresas do Lucro Real',
        'Primeiro verificador tributário do eSocial, SST e Gestão de Riscos a Terceiros',
      ],
    },
    stats: [
      { value: '12.000+', label: 'clientes satisfeitos', icon: 'Users' },
      { value: 'R$8 bi+', label: 'em créditos aproveitados', icon: 'DollarSign' },
      { value: '+14%', label: 'das empresas listadas na B3 atendidas', icon: 'Building2' },
      { value: '+12', label: 'estados de atuação', icon: 'MapPin' },
    ],
    method: {
      eyebrow: 'Método exclusivo',
      title: 'Um método 100% exclusivo fundamentado nas normas da RFB',
      intro:
        'Tecnologia que enxerga e especialistas que interpretam. Um passo a passo fundamentado nas normas da Receita Federal para extrair 100% das oportunidades tributárias — sem estimativas ou amostragem documental.',
      steps: [
        { number: '1', title: 'Documentação inicial e obtenção do NDA' },
        {
          number: '2',
          title: 'Relatório Técnico Inicial (RTI)',
          description: 'Em 10 dias úteis, sem custo.',
        },
        { number: '3', title: 'Início do trabalho hands on' },
        { number: '4', title: 'Envio do relatório consolidado das oportunidades mapeadas' },
        { number: '5', title: 'Regularização dos arquivos e documentos perante à RFB' },
        {
          number: '6',
          title: 'Definição do cronograma de datas para início do aproveitamento',
        },
        {
          number: '7',
          title:
            'Lançamento das compensações na DCTF Web e/ou solicitação de Pedidos de Restituição',
        },
        {
          number: '8',
          title: 'Dossiê Técnico Final',
          description: 'Garantia de 5 anos e Suporte de CND.',
        },
      ],
    },
    differentials: {
      eyebrow: 'Diferenciais',
      title: 'Tecnologia de precisão full service',
      bullets: [
        'Tecnologia de precisão full service',
        'Geração de caixa: resultado financeiro imediato após aprovação do projeto',
        'Compliance: adequação e conformidade à legislação vigente',
        'Relatório Técnico Inicial (RTI), sem custo, em 10 dias úteis',
        'Dominância de todo o ciclo: apuração, monetização e retificação de forma automatizada',
        'Segurança: compliance na FOPAG e sigilo das informações durante todo o trabalho',
        'Remuneração apenas no êxito da operação, sem pró-labore ou antecipação de honorários',
        'Operação segurada',
        'Suporte por 5 anos',
      ],
    },
    scenario: {
      eyebrow: 'Cenário tributário brasileiro',
      title: 'O tamanho da oportunidade no Brasil',
      body: 'O cenário tributário brasileiro revela oportunidades gigantescas de fluxo de caixa ainda não aproveitadas pelas empresas. Fonte: Instituto Brasileiro de Planejamento e Tributação (IBPT) e Qive/Opinion Box.',
      bullets: [
        'Total em tributos: R$ 2,9 trilhões',
        'Compensações tributárias: R$ 275 bilhões (9,5% dos tributos declarados quitados com oportunidades tributárias)',
        'Mais de 60% das empresas ainda não mediram o impacto da Reforma Tributária nos negócios',
        '6.782.002 normas editadas desde a CF/88, sendo 443.236 tributárias',
      ],
    },
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

export interface TeamMember {
  id: string
  slug: string
  name: string
  role: string
  image: string
  bio: string
  extendedBio?: string[]
  expertise: string[]
  email: string
  phone?: string
  credentials?: { label: string; value: string }[]
}

export const founderMember: TeamMember = {
  id: '1',
  slug: 'claudio-fileto',
  name: 'Claudio Fileto',
  role: 'Sócio Fundador',
  image: '/src/assets/claudiocirculo-verde-sf-86d2f.png',
  bio: 'Advogado desde 1991, especialista em administração empresarial e tributária, com mais de 25 anos de sólida atuação em gestão e direção executiva em grandes empresas nacionais e multinacionais. Fundador da Fileto Expertise Empresarial.',
  extendedBio: [
    'Advogado inscrito na OAB desde 1991, Claudio Fileto reúne mais de três décadas de sólida trajetória jurídica e executiva, com especializações nas áreas de administração empresarial e tributária.',
    'Ao longo de mais de 25 anos ocupando posições de gestão e alta liderança em grandes companhias nacionais e multinacionais, desenvolveu uma visão estratégica 360° sobre negócios, finanças estruturadas, eficiência tributária e governança.',
    'Em janeiro de 2019, fundou a Fileto Expertise Empresarial com o propósito de oferecer às empresas e empresários uma advocacia consultiva e estratégica de alto padrão, que alia rigor técnico à geração prática de valor e proteção patrimonial.',
  ],
  expertise: [
    'Gestão Estratégica & Empresarial',
    'Inteligência & Planejamento Tributário',
    'Home Equity & Finanças Estruturadas',
    'Governança Corporativa',
    'Negociações & M&A',
  ],
  email: 'contato@filetoexpertise.com.br',
  phone: '+55 (11) 93329-3331',
  credentials: [
    { label: 'Advocacia', value: 'Desde 1991' },
    { label: 'Trajetória Executiva', value: '25+ Anos em Grandes Empresas' },
    { label: 'Fundação', value: 'Fileto Expertise Empresarial (2019)' },
    { label: 'Especialização', value: 'Administração Empresarial e Tributária' },
  ],
}

export const teamMembers: TeamMember[] = [founderMember]
