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
    description:
      'Parceiro da AG CAPITAL TAXTECH LTDA., a Primeira TaxTech do Brasil, empresa referência em tecnologia tributária desde 2010, que detém Tecnologia Proprietária para identificação de ativos ocultos nos recolhimentos tributários, gerando fluxo de caixa imediato para empresas.',
    fullDescription: '',
    subtitle: 'Especialista na área tributária, o Grupo Fileto é',
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
  {
    id: '5',
    slug: 'planejamento-patrimonial-sucessorio',
    title: 'Planejamento Patrimonial e Sucessório',
    icon: 'Shield',
    description:
      'Estruturação de Holdings Familiares e Empresariais para proteção patrimonial e planejamento sucessório.',
    fullDescription: '',
    subtitle: 'Especialista em direito patrimonial e sucessório, o Grupo Fileto oferece',
    aboutSection: {
      eyebrow: 'Proteção patrimonial',
      title: 'Estruturação de Holdings Familiares e Empresariais',
      body: 'O planejamento patrimonial e sucessório é uma das áreas mais sensíveis e estratégicas do direito empresarial contemporâneo. O Grupo Fileto atua na estruturação de holdings — familiares e empresariais — como instrumento de proteção do patrimônio acumulado ao longo de gerações, otimização fiscal e organização da sucessão, prevenindo conflitos e assegurando a continuidade dos negócios de forma planejada, segura e eficiente.',
      bullets: [
        'Proteção do patrimônio pessoal e empresarial contra riscos e contingências',
        'Planejamento da sucessão hereditária com redução de carga tributária (ITCMD)',
        'Estruturação de holdings patrimoniais, familiares e empresariais',
        'Governança familiar: acordos de sócios, protocolos e regras de convivência',
        'Blindagem patrimonial contra penhoras, bloqueios judiciais e disputas societárias',
        'Reorganização societária com foco em eficiência fiscal e proteção de ativos',
        'Assessoria completa na elaboração de testamentos e doações com reserva de usufruto',
      ],
    },
    stats: [
      {
        value: '70%',
        label: 'das empresas familiares não sobrevivem à 2ª geração',
        icon: 'TrendingDown',
      },
      {
        value: 'Até 8%',
        label: 'de ITCMD (imposto sobre herança) — planejamento reduz essa carga',
        icon: 'Percent',
      },
      {
        value: '3ª+ geração',
        label: 'Empresas com holding sobrevivem por mais gerações',
        icon: 'Shield',
      },
      {
        value: '100%',
        label: 'de segurança jurídica na estruturação societária',
        icon: 'CheckCircle',
      },
    ],
    method: {
      eyebrow: 'Nossa metodologia',
      title: 'Um processo estruturado para proteger o seu legado',
      intro:
        'Da análise patrimonial inicial até a implementação completa da holding, conduzimos cada etapa com rigor técnico, confidencialidade absoluta e visão estratégica de longo prazo.',
      steps: [
        {
          number: '1',
          title:
            'Diagnóstico patrimonial: mapeamento completo de ativos, participações e estrutura societária atual',
        },
        {
          number: '2',
          title:
            'Análise de riscos e vulnerabilidades: identificação de exposições fiscais, societárias e familiares',
        },
        {
          number: '3',
          title:
            'Desenho da estrutura societária ideal: holding patrimonial, familiar ou empresarial conforme o caso',
        },
        {
          number: '4',
          title: 'Elaboração de acordos de sócios, protocolos familiares e regras de governança',
        },
        {
          number: '5',
          title:
            'Implementação jurídica: constituição, integralização de capital e reorganização societária',
        },
        {
          number: '6',
          title: 'Planejamento sucessório: testamentos, doações, usufruto e cláusulas de proteção',
        },
        {
          number: '7',
          title:
            'Monitoramento contínuo e atualização da estrutura conforme mudanças legislativas e familiares',
        },
      ],
    },
    differentials: {
      eyebrow: 'Diferenciais',
      title: 'Por que estruturar uma holding com o Grupo Fileto',
      bullets: [
        'Visão multidisciplinar: atuação integrada das áreas societária, tributária e sucessória',
        'Experiência comprovada de mais de 30 anos em direito empresarial e patrimonial',
        'Atendimento personalizado e confidencial para cada núcleo familiar ou empresarial',
        'Foco em resultados de longo prazo: perpetuidade do patrimônio e harmonia familiar',
        'Blindagem patrimonial completa contra os principais riscos do ambiente de negócios brasileiro',
        'Estruturação de holdings com total conformidade à legislação vigente e às normas da RFB',
        'Redução legal e planejada da carga tributária sobre heranças e doações (ITCMD)',
        'Prevenção de litígios familiares com acordos e protocolos de governança claros e eficazes',
      ],
    },
    scenario: {
      eyebrow: 'Cenário brasileiro',
      title: 'A importância do planejamento patrimonial e sucessório no Brasil',
      body: 'O Brasil tem uma das legislações mais complexas do mundo em matéria tributária e sucessória. Sem planejamento adequado, o patrimônio construído ao longo de uma vida pode ser dilapidado por disputas, tributos e ineficiências. Dados do IBGE, IBPT e IBGC demonstram a relevância desse planejamento.',
      bullets: [
        'Cerca de 90% das empresas brasileiras têm perfil familiar (IBGE)',
        'Apenas 30% das empresas familiares sobrevivem à transição para a segunda geração (IBGC)',
        'ITCMD pode chegar a 8% sobre o valor total dos bens transmitidos, a depender do estado',
        'Disputas societárias e familiares estão entre as principais causas de dissolução de empresas no Brasil',
        'A holding reduz a carga tributária sobre heranças e protege o patrimônio de penhoras e bloqueios',
      ],
    },
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
  image: '/Claudio_Circulo verde-SF-86d2f.png',
  bio: 'Advogado desde 1991, especialista em administração empresarial e direito tributário, com mais de 25 anos de sólida atuação em gestão e direção executiva em grandes empresas nacionais e multinacionais. Fundador do GRUPO FILETO.',
  extendedBio: [
    'Advogado inscrito na OAB desde 1991, Claudio Fileto reúne mais de três décadas de sólida trajetória jurídica e executiva, com especializações nas áreas de administração empresarial e direito tributário.',
    'Ao longo de mais de 25 anos ocupando posições de gestão e alta liderança em grandes companhias nacionais e multinacionais, desenvolveu uma visão estratégica 360° sobre negócios, finanças estruturadas, eficiência tributária e governança.',
    'Em janeiro de 2019, fundou o GRUPO FILETO com o propósito de oferecer às empresas e empresários uma advocacia consultiva e estratégica de alto padrão, que alia rigor técnico à geração prática de valor e proteção patrimonial.',
  ],
  expertise: [
    'Gestão Empresarial',
    'Inteligência Tributária',
    'Home Equity',
    'Governança',
    'M&A',
    'Consultoria Empresarial',
    'Planejamento Patrimonial, Societário e Sucessório (Holdings)',
  ],
  email: 'contato@filetoexpertise.com.br',
  phone: '+55 (11) 93329-3331',
  credentials: [
    { label: 'Advocacia', value: 'Desde 1991' },
    { label: 'Trajetória Executiva', value: '25+ Anos em Grandes Empresas' },
    { label: 'Fundação', value: 'GRUPO FILETO (2019)' },
    { label: 'Especialização', value: 'Administração Empresarial e Direito Tributário' },
  ],
}

export const teamMembers: TeamMember[] = [founderMember]
