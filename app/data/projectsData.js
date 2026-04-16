import saloon from "@/public/projectImg/saloon-manager.png";
import portfoliounifil from "@/public/projectImg/portfolio-unifil.png";
import barrel from "@/public/projectImg/barrel.png";
import notetaker from "@/public/projectImg/notetaker.png";
import bleedout from "@/public/projectImg/bleedout.png";
import ecorunner from "@/public/projectImg/ecorunner.png";

export const projectsData = [
  {
    id: 1,
    imageSrc: barrel,
    title: "Barrel Organization",
    tech: [
      "Git",
      "Javascript",
      "Html5",
      "Css3",
      "Tailwindcss",
      "React",
      "Framer",
    ],
    description:
      "Uma instalação de ensino de defesa pessoal focada no ensino de sobrevivência urbana e outras habilidades.",
    report:
      "Este projeto foi desenvolvido como uma landing page moderna utilizando React para componentização e reutilização de UI. O Tailwindcss CSS foi escolhido para acelerar o desenvolvimento e garantir um layout responsivo e consistente. JavaScript foi utilizado para lógica de interação, enquanto o Framer Motion (motion.dev) adiciona animações suaves e micro-interações, melhorando a experiência do usuário. HTML e CSS garantem a base semântica e estrutural da aplicação.",
    tags: ["Frontend"],
    link: "https://barrelorganization.netlify.app/home",
    githubLink: "https://github.com/WitorDev/barrel_org",
  },
  {
    id: 2,
    imageSrc: ecorunner,
    title: "EcoRunner",
    tech: ["Git", "Javascript", "Html5", "Css3", "Tailwindcss"],
    description:
      "Um site do jogo EcoRunner, onde você pode encontrar informações sobre o jogo, como jogá-lo e baixa-lo. Feito como projeto de Extensão Universitária para a UniFil.",
    report:
      "O site foi feito com carinho por meio de Vanilla Web e Tailwind para maior facilidade de estilização, o objetivo foi criar uma interface agradável, tendo como inspiração para o frontend o site https://refactoring.guru/.",
    tags: ["Frontend"],
    link: "https://witordev.github.io/ecorunner_website/",
    githubLink: "https://github.com/WitorDev/ecorunner_website",
  },
  {
    id: 3,
    imageSrc: notetaker,
    title: "Note-Taker",
    tech: ["Git", "Javascript", "Html5", "Css3"],
    description:
      "Um gerenciador de tarefas simples e eficiente construído com Vanilla WEB (JS, HTML e CSS).",
    report:
      "Este projeto foi desenvolvido utilizando apenas JavaScript, HTML e CSS, sem frameworks, com o objetivo de reforçar os fundamentos da web. JavaScript é responsável pela lógica de criação, remoção e persistência das tarefas. HTML fornece a estrutura semântica da aplicação, enquanto CSS é usado para estilização e organização visual.",
    tags: ["Frontend"],
    link: "https://witordev.github.io/Note-Taker/",
    githubLink: "https://github.com/WitorDev/Note-Taker",
  },
  {
    id: 4,
    imageSrc: portfoliounifil,
    title: "Portfólio UniFil",
    tech: ["Git", "Javascript", "Html5", "Css3", "Express", "Nodedotjs", "Ejs"],
    description:
      "O meu antigo portfolio da UniFil, com relatórios de estudo e informações sobre mim e o curso de Ciência da Computação.",
    report:
      "Este projeto combina frontend e backend. O backend foi desenvolvido com Node.js e Express para gerenciamento de rotas e lógica do servidor. O EJS foi utilizado como template engine para renderizar páginas dinâmicas no servidor. JavaScript coordena a lógica geral da aplicação, enquanto HTML e CSS são responsáveis pela estrutura e estilização.",
    tags: ["Frontend", "Backend"],
    link: "https://portfolio-unifil.onrender.com/",
    githubLink: "https://github.com/witortenadev/Portfolio-Unifil",
  },
  {
    id: 5,
    imageSrc: bleedout,
    title: "BleedOut",
    tech: ["Git", "Godotengine"],
    description:
      "Um jogo de tiro 2D top-down onde você deve avançar até o topo do mapa. Desenvolvido usando GDScript na Godot Engine.",
    report:
      "O jogo foi desenvolvido utilizando a Godot Engine, escolhida por sua eficiência em jogos 2D e facilidade de prototipação. A lógica do jogo foi implementada em GDScript, permitindo controle de movimentação, colisões e mecânicas de combate. A engine cuida do sistema de cenas, física e renderização.",
    tags: ["Game Dev"],
    link: "https://witordev.github.io/BleedOUT/",
    githubLink: "https://github.com/WitorDev/BleedOUT",
  },
  {
    id: 6,
    imageSrc: saloon,
    title: "Saloon Manager",
    tech: ["Git", "Javascript", "Html5", "Css3", "Php", "Mysql"],
    description:
      "Um gerenciador de salão simples, onde você pode criar e gerenciar agendamentos de acordo com o seu cliente..",
    report:
      "Este projeto foi desenvolvido utilizando PHP para o backend, sendo responsável pela lógica de negócio, criação e gerenciamento de agendamentos e comunicação com o banco de dados. O MySQL (MariaDB) foi utilizado para persistência dos dados, armazenando informações de clientes e horários de forma estruturada. No frontend, HTML fornece a base semântica das páginas e CSS é utilizado para estilização e organização visual. A aplicação integra frontend e backend de forma direta, com o PHP renderizando e processando dados dinamicamente no servidor.",
    tags: ["Backend", "Frontend"],
    link: "https://saloonmanager.page.gd/",
    githubLink: "https://github.com/WitorDev/php_saloon_manager",
  },
];
