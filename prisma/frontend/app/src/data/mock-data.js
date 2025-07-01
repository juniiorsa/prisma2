// Dados mocados para o PrismaGov conforme especificado no planejamento

export const mockDocumentos = [
  {
    id: 'd1',
    titulo: 'TR - Contratação de Software de Gestão',
    status: 'Finalizado',
    responsavel: 'Júnior Almeida',
    atualizadoEm: '25/06/2025',
    criadoEm: '15/06/2025',
    versao: '2.1',
    uuid: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
  },
  {
    id: 'd2',
    titulo: 'ETP - Aquisição de Notebooks para Secretaria',
    status: 'Em Elaboracao',
    responsavel: 'Ana Silva',
    atualizadoEm: '27/06/2025',
    criadoEm: '20/06/2025',
    versao: '1.3',
    uuid: 'b2c3d4e5-f6g7-8901-bcde-f23456789012'
  },
  {
    id: 'd3',
    titulo: 'TR - Manutenção de Ar-condicionado',
    status: 'Com Pendencia',
    responsavel: 'Carlos Pereira',
    atualizadoEm: '18/06/2025',
    criadoEm: '10/06/2025',
    versao: '1.0',
    uuid: 'c3d4e5f6-g7h8-9012-cdef-345678901234'
  },
  {
    id: 'd4',
    titulo: 'ETP - Reforma da Biblioteca Municipal',
    status: 'Finalizado',
    responsavel: 'Júnior Almeida',
    atualizadoEm: '15/05/2025',
    criadoEm: '01/05/2025',
    versao: '3.0',
    uuid: 'd4e5f6g7-h8i9-0123-defg-456789012345'
  },
  {
    id: 'd5',
    titulo: 'TR - Contratação de Serviços de Limpeza',
    status: 'Em Elaboracao',
    responsavel: 'Maria Santos',
    atualizadoEm: '28/06/2025',
    criadoEm: '25/06/2025',
    versao: '1.1',
    uuid: 'e5f6g7h8-i9j0-1234-efgh-567890123456'
  }
];

// Dados mocados para o histórico de versões
export const mockHistoricoVersoes = {
  'd1': [
    {
      versao: '2.1',
      autor: 'Júnior Almeida',
      data: '25/06/2025 14:30',
      alteracoes: 'Revisão final e ajustes na seção de especificações técnicas'
    },
    {
      versao: '2.0',
      autor: 'Júnior Almeida',
      data: '23/06/2025 10:15',
      alteracoes: 'Adicionada seção de critérios de sustentabilidade'
    },
    {
      versao: '1.0',
      autor: 'Júnior Almeida',
      data: '15/06/2025 09:00',
      alteracoes: 'Versão inicial do documento'
    }
  ]
};

// Dados mocados para métricas do dashboard
export const mockMetricas = {
  totalDocumentos: 47,
  documentosFinalizados: 32,
  documentosEmAndamento: 12,
  documentosComPendencia: 3,
  tempoMedioElaboracao: '8.5 dias',
  documentosPorMes: [
    { mes: 'Jan', quantidade: 8 },
    { mes: 'Fev', quantidade: 12 },
    { mes: 'Mar', quantidade: 15 },
    { mes: 'Abr', quantidade: 10 },
    { mes: 'Mai', quantidade: 18 },
    { mes: 'Jun', quantidade: 22 }
  ],
  statusDistribuicao: [
    { status: 'Finalizado', quantidade: 32, cor: '#10B981' },
    { status: 'Em Elaboração', quantidade: 12, cor: '#F59E0B' },
    { status: 'Com Pendência', quantidade: 3, cor: '#EF4444' }
  ]
};

// Dados mocados para templates inteligentes
export const mockTemplates = [
  {
    id: 't1',
    titulo: 'Template - Contratação de Software',
    categoria: 'Tecnologia',
    descricao: 'Template para contratação de soluções de software',
    blocos: [
      'Objeto da contratação',
      'Justificativa',
      'Especificações técnicas',
      'Critérios de aceitação'
    ]
  },
  {
    id: 't2',
    titulo: 'Template - Serviços de Manutenção',
    categoria: 'Infraestrutura',
    descricao: 'Template para contratação de serviços de manutenção',
    blocos: [
      'Descrição dos serviços',
      'Periodicidade',
      'Materiais necessários',
      'Garantias'
    ]
  }
];

// Dados mocados para colaboração
export const mockColaboradores = [
  {
    id: 'u1',
    nome: 'Júnior Almeida',
    cargo: 'Gestor',
    email: 'junior.almeida@prefeitura.gov.br',
    avatar: null,
    status: 'online'
  },
  {
    id: 'u2',
    nome: 'Ana Silva',
    cargo: 'Analista',
    email: 'ana.silva@prefeitura.gov.br',
    avatar: null,
    status: 'offline'
  },
  {
    id: 'u3',
    nome: 'Carlos Pereira',
    cargo: 'Coordenador',
    email: 'carlos.pereira@prefeitura.gov.br',
    avatar: null,
    status: 'online'
  }
];

