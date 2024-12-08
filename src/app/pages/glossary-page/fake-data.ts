export interface IGlossaryData {
  id: number;
  title: string;
  description: string;
  reference: string;
  applicability: string;
}

export const fakeData: IGlossaryData[] = [
  {
    id: 1,
    title: "Anuidade ordinária",
    description: "Série de fluxos de caixa constantes ocorrendo ao final de períodos fixos.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Pode ser utilizada para modelar pagamentos periódicos, como assinaturas de software com renovação automática."
  },
  {
    id: 2,
    title: "Anuidade vencida",
    description: "Série de pagamentos em que os fluxos de caixa ocorrem no início de cada período.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Usada para calcular adiantamentos, como pagamentos iniciais de serviços de computação em nuvem."
  },
  {
    id: 3,
    title: "Perpetuidade",
    description: "Série de fluxos de caixa iguais que ocorrem indefinidamente.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Modelo financeiro para avaliar assinaturas vitalícias de software ou serviços."
  },
  {
    id: 4,
    title: "Série mista",
    description: "Combinação de diferentes séries de fluxos de caixa.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Representa custos mistos de um projeto híbrido de software."
  },
  {
    id: 5,
    title: "Composição de juros",
    description: "Processo de acumular juros sobre o principal e sobre os juros já acumulados.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Utilizado em algoritmos de otimização financeira para bancos de dados."
  },
  {
    id: 6,
    title: "Taxa de juros nominal",
    description: "Taxa de juros declarada que não considera os efeitos de composição em períodos menores.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Definição de custos fixos em contratos de serviços de TI."
  },
  {
    id: 7,
    title: "Taxa de juros efetiva",
    description: "Taxa de juros que considera a composição em períodos menores do que o anual.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Cálculos de escalabilidade de custos em computação em nuvem."
  },
  {
    id: 8,
    title: "Valor presente (VP)",
    description: "Quantia atual equivalente a um fluxo de caixa futuro descontado por uma taxa de juros.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Avaliação de projetos futuros em ambientes de TI."
  },
  {
    id: 9,
    title: "Valor futuro (VF)",
    description: "Montante acumulado após aplicar juros sobre um investimento ao longo de um ou mais períodos.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Modelagem de crescimento financeiro de uma startup de tecnologia."
  },
  {
    id: 10,
    title: "Fator de valor presente",
    description: "Multiplicador usado para converter fluxos de caixa futuros em valores presentes.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Determinar investimentos em atualizações tecnológicas."
  },
  {
    id: 11,
    title: "Fator de valor futuro",
    description: "Multiplicador usado para calcular o valor futuro de um montante investido hoje.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Projeções financeiras em contratos de longo prazo em TI."
  },
  {
    id: 12,
    title: "Amortização de empréstimos",
    description: "Processo de pagamento de um empréstimo por meio de reduções no principal.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Modelar reembolsos em financiamentos de startups de tecnologia."
  },
  {
    id: 13,
    title: "Planilha de amortização",
    description: "Documento que detalha pagamentos periódicos de um empréstimo.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Usada em sistemas de ERP para controlar financiamentos."
  },
  {
    id: 14,
    title: "Lucros por ação (LPA)",
    description: "Indica o lucro disponível para cada ação ordinária de uma empresa.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Avaliação do retorno de investimentos em empresas de tecnologia."
  },
  {
    id: 15,
    title: "Custos de agency",
    description: "Custos associados a conflitos de interesse entre acionistas e administradores.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Modelar eficiência em contratos de outsourcing de TI."
  },
  {
    id: 16,
    title: "Governança corporativa",
    description: "Conjunto de práticas e políticas que regulam a relação entre partes interessadas.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Desenvolver políticas para equipes distribuídas em computação."
  },
  {
    id: 17,
    title: "Mercado primário",
    description: "Segmento onde novos títulos são emitidos e vendidos diretamente.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Financiar novos produtos tecnológicos em IPOs."
  },
  {
    id: 18,
    title: "Mercado secundário",
    description: "Ambiente onde investidores negociam títulos já emitidos.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Plataformas para negociação de ativos digitais."
  },
  {
    id: 19,
    title: "Mercado de capitais",
    description: "Facilita a emissão e a negociação de títulos de longo prazo.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Investimento em infraestrutura de computação em nuvem."
  },
  {
    id: 20,
    title: "Ações ordinárias",
    description: "Títulos que representam a propriedade de uma empresa.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Desenvolver aplicativos para gestão de ações."
  },
  {
    id: 21,
    title: "Ações preferenciais",
    description: "Ações que dão prioridade no recebimento de dividendos.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Análise de portfólios com foco em dividendos estáveis."
  },
  {
    id: 22,
    title: "Ganhos de capital",
    description: "Lucro obtido na venda de um ativo por um preço superior ao de aquisição.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Gerenciamento de ganhos em transações de criptoativos."
  },
  {
    id: 23,
    title: "Preço ofertado",
    description: "Valor máximo que um comprador está disposto a pagar.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Desenvolvimento de bots para leilões online."
  },
  {
    id: 24,
    title: "Preço demandado",
    description: "Valor mínimo que um vendedor está disposto a aceitar.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Plataformas de e-commerce para negociação direta."
  },
  {
    id: 25,
    title: "Oferta pública",
    description: "Emissão de títulos no mercado primário acessível a um grande número de investidores.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Usada para financiar grandes projetos de tecnologia, como o desenvolvimento de plataformas SaaS."
  },
  {
    id: 26,
    title: "Colocação privada",
    description: "Venda direta de títulos ou ações a um grupo limitado de investidores.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Utilizada para captar investimentos para startups de tecnologia sem abrir capital ao público."
  },
  {
    id: 27,
    title: "Resultado ordinário",
    description: "Lucro operacional de uma empresa antes de receitas e despesas não recorrentes.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Auxilia no cálculo da lucratividade de sistemas de ERP personalizados para empresas."
  },
  {
    id: 28,
    title: "Teoria de maximização de lucros",
    description: "Ideia de que o objetivo principal de uma empresa é maximizar o lucro para seus acionistas.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Modelar algoritmos de recomendação para otimizar vendas em e-commerce."
  },
  {
    id: 29,
    title: "Análise custo-benefício",
    description: "Avaliação sistemática dos custos e benefícios de uma decisão ou projeto.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Ferramenta para análise de viabilidade em projetos de implementação de TI."
  },
  {
    id: 30,
    title: "Instrumentos de dívida de curto prazo",
    description: "Títulos emitidos com prazo de vencimento menor que um ano, como notas promissórias.",
    reference: "Fundamentos de Administração Financeira, Ross et al., 9ª Edição, 2013.",
    applicability: "Gestão de caixa para financiar aquisições de equipamentos computacionais."
  }
];
