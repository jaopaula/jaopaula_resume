export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Cases", href: "#cases" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#tecnologias" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export const impactMetrics = [
  {
    value: "40h → 10min",
    label: "Análise automatizada",
    detail: "Processamento de 3 meses de dados no Centro Médico.",
  },
  {
    value: "60h → 1min",
    label: "Anonimização operacional",
    detail: "Relatórios anuais anonimizados com padronização e rastreabilidade.",
  },
  {
    value: "+98%",
    label: "Redução de esforço",
    detail: "Automações orientadas a reduzir tarefas manuais repetitivas.",
  },
];

export const projects = [
  {
    title: "Centro Médico",
    area: "Saúde ocupacional",
    problem: "Análises manuais demoradas dificultavam a visão rápida de exames, rankings e indicadores.",
    solution: "Automação de pipelines analíticos, anonimização de relatórios e painéis para acompanhamento operacional.",
    impact: "Análises de meses passaram de horas para minutos.",
    tags: ["Python", "Pandas", "Dashboards", "Automação"],
  },
  {
    title: "Absenteísmo",
    area: "RH e operações",
    problem: "Faltas e afastamentos precisavam ser entendidos por empresa, cargo, turno e departamento.",
    solution: "Segmentação de dados, indicadores comparativos e visões para apoiar decisões do RH.",
    impact: "Mais clareza para priorizar ações e investigar padrões de ausência.",
    tags: ["Python", "BI", "Indicadores", "Análise"],
  },
  {
    title: "Fiscal / NFSe",
    area: "Fiscal e compliance",
    problem: "Validações e acompanhamento de SLA dependiam de consolidações manuais e pouca rastreabilidade.",
    solution: "Modelagem de indicadores, validação de dados e integração com visões executivas e operacionais.",
    impact: "Acompanhamento mais confiável de qualidade, prazos e inconsistências.",
    tags: ["SQL", "MicroStrategy", "ETL", "SLA"],
  },
];

export const cases = [
  {
    title: "Centro Médico",
    context: "Rotinas de análise e relatórios exigiam muito tempo operacional para consolidar informações sensíveis.",
    problem: "Análises manuais dificultavam visão rápida de rankings, histórico e indicadores de acompanhamento.",
    solution: "Criei automações para análise, anonimização e organização dos dados, com foco em indicadores claros.",
    impact: "Processos que levavam dezenas de horas passaram a ser executados em minutos.",
    metric: "40h → 10min",
    technologies: ["Python", "Pandas", "Dashboards", "Automação"],
  },
  {
    title: "Absenteísmo",
    context: "O RH precisava identificar padrões de faltas por recortes de negócio e operação.",
    problem: "A leitura dos dados era fragmentada por empresa, cargo, turno e departamento.",
    solution: "Estruturei análises por empresa, cargo, turno e departamento, criando base para indicadores e modelos preditivos.",
    impact: "A área ganhou visibilidade para priorizar investigações e apoiar decisões com dados.",
    metric: "Dashboards executivos",
    technologies: ["RH Analytics", "BI", "Segmentação", "Indicadores"],
  },
  {
    title: "Fiscal / NFSe",
    context: "Indicadores fiscais exigiam validação, rastreabilidade e leitura executiva de prazos e qualidade.",
    problem: "Validações e acompanhamento de SLA dependiam de consolidações manuais e pouca rastreabilidade.",
    solution: "Organizei fluxos de validação e indicadores integrados a ferramentas de BI.",
    impact: "Melhor leitura de SLA, inconsistências e pontos de atenção operacional.",
    metric: "Validação de dados",
    technologies: ["Fiscal", "SQL", "MicroStrategy", "ETL"],
  },
];

export const technologyGroups = [
  {
    title: "Dados",
    items: ["Python", "Pandas", "Plotly", "Jupyter", "Parquet"],
  },
  {
    title: "BI",
    items: ["MicroStrategy", "Power BI", "Dash", "Indicadores", "Storytelling"],
  },
  {
    title: "Automação",
    items: ["SQL", "ETL", "GitHub", "Pipelines", "Validação", "Cron"],
  },
  {
    title: "Machine Learning",
    items: ["Modelagem", "Segmentação", "Análise preditiva", "Validação", "Experimentos"],
  },
  {
    title: "Documentação",
    items: ["Storytelling", "Documentação", "UX de dados", "Git", "VS Code"],
  },
];

export const timeline = [
  {
    period: "Agora",
    title: "Cientista de Dados",
    description: "Desenvolvimento de soluções analíticas, dashboards e automações para transformar processos complexos em decisões claras.",
  },
  {
    period: "Projetos recentes",
    title: "Automação e BI aplicado",
    description: "Cases em saúde ocupacional, RH analytics e fiscal, com foco em redução de esforço operacional e rastreabilidade.",
  },
  {
    period: "Base técnica",
    title: "Dados, produto e tecnologia",
    description: "Experiência combinando programação, arquitetura de dados, análise de negócio e comunicação de resultados.",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "joao_vitor_151004@hotmail.com",
    href: "mailto:joao_vitor_151004@hotmail.com",
  },
  {
    label: "LinkedIn",
    value: "joao-vitor-santos-de-paula",
    href: "https://www.linkedin.com/in/jo%C3%A3o-vitor-santos-de-paula-7b8a96232/",
  },
  {
    label: "GitHub",
    value: "github.com/jaopaula",
    href: "https://github.com/jaopaula",
  },
];
