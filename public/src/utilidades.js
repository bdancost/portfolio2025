/**
 * Lista de cursos concluídos com informações detalhadas
 * @type {Array<{
 *   id: number,
 *   curso: string,
 *   instituicao: string,
 *   estado: string,
 *   dataConclusao: string,
 *   duracaoHoras: number,
 *   duracaoTexto: string,
 *   descricao: string,
 *   urlCertificado: string,
 *   competencias: string[]
 * }>}
 */
export const cursos = [
  {
    id: 0,
    curso: "JavaScript Impressionador",
    instituicao: "Hashtag Treinamentos",
    estado: "Concluído",
    dataConclusao: "16/01/2025",
    duracaoHoras: 146,
    duracaoTexto: "146 horas",
    descricao: `
      Curso completo de JavaScript abordando desde fundamentos até aplicações completas.
      Principais competências adquiridas:
      - Manipulação de dados, variáveis, funções e estruturas de controle
      - Front-end: DOM, formulários, localStorage
      - ReactJS: Hooks, roteamento, gerenciamento de estado
      - Back-end: APIs com Node.js e ExpressJS, middlewares, bancos de dados
      Projetos desenvolvidos:
      • Gerenciador de formulários
      • Calculadora de investimentos
      • Gerenciador de playlists
      • Front-end de e-commerce com React
      • API funcional completa
    `,
    urlCertificado:
      "https://portalhashtag.com/certificado-hashtag/1737055809674x398014002776841540",
    competencias: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "Gestão de estado",
      "Manipulação de DOM",
    ],
  },
  {
    id: 1,
    curso: "Python Impressionador",
    instituicao: "Hashtag Treinamentos",
    estado: "Concluído",
    dataConclusao: "04/12/2024",
    duracaoHoras: 124,
    duracaoTexto: "124 horas",
    descricao: `
      Curso abrangente de Python com aplicações práticas em diversas áreas.
      Conteúdo estudado:
      - Fundamentos: variáveis, condições, loops, estruturas de dados
      - Manipulação de dados: NumPy, Pandas, integração com Excel
      - Automação: Selenium, BeautifulSoup, RPA, Regex
      - Desenvolvimento web: Flask e Django
      - Interface gráfica: Tkinter
      Projetos desenvolvidos:
      • Automações para mercado de trabalho
      • Aplicações web com Flask/Django
      • Soluções com interface gráfica
    `,
    urlCertificado:
      "https://portalhashtag.com/certificado-hashtag/1733353920752x874769355660591100",
    competencias: [
      "Python",
      "Pandas",
      "Web Scraping",
      "Flask",
      "Django",
      "Automação",
    ],
  },
  {
    id: 2,
    curso: "SQL Impressionador",
    instituicao: "Hashtag Treinamentos",
    estado: "Concluído",
    dataConclusao: "22/07/2024",
    duracaoHoras: 90,
    duracaoTexto: "90 horas",
    descricao: `
      Curso avançado de banco de dados cobrindo múltiplos sistemas.
      Habilidades adquiridas:
      - Consultas complexas em SQL Server, MySQL, PostgreSQL e Oracle
      - Funções de agregação, joins, manipulação de strings e datas
      - Subqueries, CTEs, triggers e transações
      - Integração com Excel, Power BI e Python
      - Modelagem de bancos de dados (conceitual, lógico e físico)
      - Técnicas de normalização
    `,
    urlCertificado:
      "https://portalhashtag.com/certificado-hashtag/1721678269654x519470694891257860",
    competencias: [
      "SQL",
      "Modelagem de dados",
      "MySQL",
      "PostgreSQL",
      "Otimização de queries",
    ],
  },
  {
    id: 3,
    curso: "Power BI Impressionador",
    instituicao: "Hashtag Treinamentos",
    estado: "Concluído",
    dataConclusao: "14/06/2024",
    duracaoHoras: 118,
    duracaoTexto: "118 horas",
    descricao: `
      Curso completo de análise e visualização de dados com Power BI.
      Conteúdo abordado:
      - Importação e tratamento de dados com Power Query
      - Criação e gerenciamento de relacionamentos
      - Funções DAX para análise de dados
      - Storytelling e visualização de dados
      - Desenvolvimento de dashboards no PowerPoint
      - Integração com bancos de dados SQL
      - Tópicos avançados: DAX Avançado, Power BI Online
    `,
    urlCertificado:
      "https://portalhashtag.com/certificado-hashtag/1718382494977x175981244020949000",
    competencias: [
      "Power BI",
      "DAX",
      "Power Query",
      "Visualização de dados",
      "Business Intelligence",
    ],
  },
  {
    id: 4,
    curso: "Alura Include - HTML, CSS, JavaScript e Python",
    instituicao: "Alura",
    estado: "Concluído",
    dataConclusao: "03/12/2024",
    duracaoHoras: 44,
    duracaoTexto: "44 horas",
    descricao: `
      Formação abrangente em programação com foco em fundamentos.
      Conteúdo estudado:
      - Lógica de programação com JavaScript
      - Versionamento com Git e GitHub
      - Python: aplicações e orientação a objetos
      - Front-end: HTML, CSS e JavaScript
      - Desenvolvimento de páginas web dinâmicas e responsivas
    `,
    urlCertificado:
      "https://cursos.alura.com.br/user/pr-danfc88/fullCertificate/9a9dcd89e5102285e03b9b281feea1d8",
    competencias: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Python",
      "Git",
      "Responsividade",
    ],
  },
];

/**
 * Lista de projetos desenvolvidos com informações técnicas
 * @type {Array<{
 *   id: number,
 *   nome: string,
 *   emoji: string,
 *   descricao: string,
 *   funcionalidades: string[],
 *   linkDemo: string,
 *   imagem: string,
 *   github: string,
 *   tecnologias: string[],
 *   dataCriacao: string
 * }>}
 */
export const projetos = [
  {
    id: 1,
    nome: "E-Commerce Zara - Loja Online",
    emoji: "⚜️",
    descricao:
      "Simulação de sistema e-commerce com foco na experiência do usuário.",
    funcionalidades: [
      "Carrinho de compras interativo",
      "<br>Processo de checkout completo",
      "<br>Histórico de pedidos",
      "<br>Filtros por categorias de produtos",
    ],
    linkDemo: "https://bdancost.github.io/e-commerce_zara/",
    imagem: "/assets/projeto06.png",
    github: "https://github.com/bdancost/e-commerce_zara",
    tecnologias: ["JavaScript", "<br>HTML", "<br>CSS", "<br>Local Storage"],
    dataCriacao: "2024-05-15",
  },
  {
    id: 2,
    nome: "Dev Burguer",
    emoji: "🍔",
    descricao: "Site para lanchonete fictícia com menu interativo.",
    funcionalidades: [
      "Exibição de menu com imagens e descrições",
      "<br>Sistema de carrinho de compras",
      "<br>Cálculo automático de total",
      "<br>Interface amigável e intuitiva",
    ],
    linkDemo: "https://burguer-dev-xi.vercel.app/",
    imagem: "/assets/projeto02.png",
    github: "https://github.com/bdancost/Burguer-Dev",
    tecnologias: [
      "HTML5",
      "<br>Tailwind CSS",
      "<br>JavaScript",
      "<br>Toastify JS",
    ],
    dataCriacao: "2024-03-10",
  },
  {
    id: 3,
    nome: "Clima Agora",
    emoji: "🌤️",
    descricao: "Aplicativo de previsão do tempo com dados em tempo real.",
    funcionalidades: [
      "Busca por cidade",
      "<br>Exibição de condições atuais",
      "<br>Previsão para próximos dias",
      "<br>Ícones ilustrativos para condições climáticas",
    ],
    linkDemo: "https://open-weather-api-seven.vercel.app/",
    imagem: "/assets/projeto03.png",
    github: "https://github.com/bdancost/OpenWeather_API",
    tecnologias: ["JavaScript", "<br>HTML", "<br>CSS", "<br>OpenWeather API"],
    dataCriacao: "2024-04-22",
  },
];
