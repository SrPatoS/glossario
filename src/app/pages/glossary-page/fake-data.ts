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
    title: "MEI",
    description: "Microempreendedor Individual, uma categoria empresarial simplificada no Brasil.",
    reference: "mei",
    applicability: "Ideal para desenvolvedores autônomos ou freelancers formalizarem seus serviços em TI."
  },
  {
    id: 2,
    title: "CNPJ",
    description: "Cadastro Nacional da Pessoa Jurídica, utilizado para identificar empresas no Brasil.",
    reference: "cnpj",
    applicability: "Requisito para empresas de TI registrarem suas operações oficialmente."
  },
  {
    id: 3,
    title: "Capital de Giro",
    description: "Recursos financeiros necessários para manter a operação de uma empresa.",
    reference: "capital-de-giro",
    applicability: "Crucial para startups de tecnologia manterem suas operações enquanto desenvolvem soluções."
  },
  {
    id: 4,
    title: "Lucro Bruto",
    description: "Receita total menos os custos diretos de produção.",
    reference: "lucro-bruto",
    applicability: "Usado para medir a rentabilidade de projetos como desenvolvimento de software personalizado."
  },
  {
    id: 5,
    title: "Lucro Líquido",
    description: "O lucro da empresa após deduzir todas as despesas, impostos e custos operacionais.",
    reference: "lucro-liquido",
    applicability: "Importante para avaliar o sucesso financeiro de empresas de TI após investimentos."
  },
  {
    id: 6,
    title: "Passivo",
    description: "Obrigações financeiras ou dívidas de uma empresa.",
    reference: "passivo",
    applicability: "Ajuda a controlar empréstimos usados para investimentos em infraestrutura de TI."
  },
  {
    id: 7,
    title: "Ativo",
    description: "Recursos ou bens que uma empresa possui e que têm valor econômico.",
    reference: "ativo",
    applicability: "Inclui equipamentos de TI, servidores, licenças de software e patentes tecnológicas."
  },
  {
    id: 8,
    title: "Depreciação",
    description: "Redução no valor de um ativo ao longo do tempo devido ao uso ou obsolescência.",
    reference: "depreciacao",
    applicability: "Afeta servidores, computadores e outros equipamentos usados em operações de TI."
  },
  {
    id: 9,
    title: "Receita Operacional",
    description: "Rendimentos gerados pelas atividades principais de uma empresa.",
    reference: "receita-operacional",
    applicability: "Refere-se aos ganhos obtidos com desenvolvimento de software ou venda de serviços de TI."
  },
  {
    id: 10,
    title: "EBITDA",
    description: "Lucros antes de juros, impostos, depreciação e amortização.",
    reference: "ebitda",
    applicability: "Ajuda a avaliar a lucratividade operacional de empresas de tecnologia."
  },
  {
    id: 11,
    title: "Margem de Lucro",
    description: "Percentual de lucro obtido em relação às receitas totais.",
    reference: "margem-de-lucro",
    applicability: "Útil para precificar serviços de TI de forma competitiva e sustentável."
  },
  {
    id: 12,
    title: "Fluxo de Caixa",
    description: "Registro de entradas e saídas de dinheiro em um determinado período.",
    reference: "fluxo-de-caixa",
    applicability: "Essencial para planejar investimentos em infraestrutura de TI e novos projetos."
  },
  {
    id: 13,
    title: "Balanço Patrimonial",
    description: "Demonstrativo contábil que apresenta os ativos, passivos e patrimônio líquido de uma empresa.",
    reference: "balanco-patrimonial",
    applicability: "Inclui ativos como licenças de software e equipamentos tecnológicos."
  },
  {
    id: 14,
    title: "ROI",
    description: "Retorno sobre Investimento, indicador que mede a eficiência de um investimento.",
    reference: "roi",
    applicability: "Usado para avaliar o retorno de investimentos em tecnologias ou sistemas."
  },
  {
    id: 15,
    title: "Patrimônio Líquido",
    description: "Diferença entre os ativos e os passivos de uma empresa.",
    reference: "patrimonio-liquido",
    applicability: "Indica a capacidade de uma empresa de TI em investir em novos projetos."
  },
  {
    id: 16,
    title: "Provisão",
    description: "Montante reservado para cobrir despesas futuras conhecidas ou estimadas.",
    reference: "provisao",
    applicability: "Importante para planejamento de manutenção de equipamentos e sistemas em TI."
  },
  {
    id: 17,
    title: "Despesa Operacional",
    description: "Gastos relacionados à manutenção das operações de uma empresa.",
    reference: "despesa-operacional",
    applicability: "Inclui custos como energia elétrica para data centers e salários de desenvolvedores."
  },
  {
    id: 18,
    title: "Margem EBITDA",
    description: "Percentual do EBITDA em relação à receita total da empresa.",
    reference: "margem-ebitda",
    applicability: "Mede a eficiência operacional em empresas que oferecem SaaS ou outros serviços."
  },
  {
    id: 19,
    title: "Capex",
    description: "Despesas de capital realizadas para adquirir ou melhorar ativos fixos.",
    reference: "capex",
    applicability: "Inclui compras de servidores, equipamentos de rede e licenças de software."
  },
  {
    id: 20,
    title: "Opex",
    description: "Despesas operacionais necessárias para manter a empresa em funcionamento.",
    reference: "opex",
    applicability: "Inclui custos de assinatura de softwares na nuvem e serviços de hospedagem."
  },
  {
    id: 21,
    title: "Break-even",
    description: "Ponto de equilíbrio financeiro, onde receitas igualam-se às despesas.",
    reference: "break-even",
    applicability: "Importante para startups de TI planejarem quando começarão a ter lucros."
  },
  {
    id: 22,
    title: "Cash Flow",
    description: "Fluxo de caixa gerado por atividades operacionais, de investimento ou financiamento.",
    reference: "cash-flow",
    applicability: "Usado para planejar aquisições de novos softwares e infraestrutura de TI."
  },
  {
    id: 23,
    title: "Taxa de Retorno",
    description: "Percentual de ganho ou perda sobre um investimento.",
    reference: "taxa-de-retorno",
    applicability: "Avalia projetos de TI, como o desenvolvimento de aplicativos ou sistemas."
  },
  {
    id: 24,
    title: "Amortização",
    description: "Processo de redução gradual de uma dívida ou depreciação de um ativo.",
    reference: "amortizacao",
    applicability: "Afeta financiamentos usados para a compra de servidores ou licenças."
  },
  {
    id: 25,
    title: "Endividamento",
    description: "Relação entre o montante de dívidas e o patrimônio de uma empresa.",
    reference: "endividamento",
    applicability: "Controla empréstimos para expansão de operações em empresas de TI."
  },
  {
    id: 26,
    title: "Juros Compostos",
    description: "Juros calculados sobre o principal e também sobre os juros acumulados.",
    reference: "juros-compostos",
    applicability: "Usado para calcular retornos de investimentos em tecnologia."
  },
  {
    id: 27,
    title: "Taxa Selic",
    description: "Taxa básica de juros da economia brasileira.",
    reference: "taxa-selic",
    applicability: "Afeta financiamentos usados por empresas de tecnologia no Brasil."
  },
  {
    id: 28,
    title: "DRE",
    description: "Demonstrativo de Resultado do Exercício, mostra o desempenho financeiro de uma empresa.",
    reference: "dre",
    applicability: "Reflete lucros e despesas em operações como desenvolvimento de software."
  },
  {
    id: 29,
    title: "Receita Líquida",
    description: "Receita total após deduzir impostos, devoluções e descontos.",
    reference: "receita-liquida",
    applicability: "Usada para medir o sucesso de vendas de produtos e serviços em TI."
  },
  {
    id: 30,
    title: "PECLD",
    description: "Provisão para créditos de liquidação duvidosa, referente a dívidas não pagas.",
    reference: "pecld",
    applicability: "Ajuda a mitigar riscos em contratos de longo prazo na área de TI."
  }
];
