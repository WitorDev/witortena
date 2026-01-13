import saloon from "@/public/projectImg/saloon-manager.png";
import portfoliounifil from "@/public/projectImg/portfolio-unifil.png";
import barrel from "@/public/projectImg/barrel.png";
import notetaker from "@/public/projectImg/notetaker.png";
import bleedout from "@/public/projectImg/bleedout.png";
import symbion from "@/public/projectImg/symbion.png";

export const projectsData = [
  {
    id: 1,
    imageSrc: barrel,
    title: "Barrel Organization",
    tech: ["Javascript", "Html5", "Css3", "Tailwindcss", "React", "Framer"],
    description:
      "Uma instalação de ensino de defesa pessoal focada no ensino de sobrevivência urbana e outras habilidades.",
    report:
      "Este projeto foi desenvolvido como uma landing page moderna utilizando React para componentização e reutilização de UI. O Tailwindcss CSS foi escolhido para acelerar o desenvolvimento e garantir um layout responsivo e consistente. JavaScript foi utilizado para lógica de interação, enquanto o Framer Motion (motion.dev) adiciona animações suaves e micro-interações, melhorando a experiência do usuário. HTML e CSS garantem a base semântica e estrutural da aplicação.",
    tags: ["Frontend"],
    link: "https://barrelorganization.netlify.app/home",
  },
  {
    id: 2,
    imageSrc: symbion,
    title: "Symbion B2B",
    tech: ["Javascript", "Html5", "Css3", "Tailwindcss", "React", "Threedotjs"],
    description:
      "Uma empresa B2B especializada em desenvolvimento de software, consultoria de TI e transformação digital.",
    report:
      "O site foi construído com React para facilitar a criação de seções reutilizáveis e escaláveis. Tailwindcss CSS foi utilizado para manter consistência visual e responsividade. Three.js foi integrado para criar elementos 3D interativos, reforçando a identidade visual da marca. JavaScript coordena a lógica de renderização e interação, enquanto HTML e CSS fornecem a base estrutural.",
    tags: ["Frontend"],
    link: "https://symbion.netlify.app/",
  },
  {
    id: 3,
    imageSrc: notetaker,
    title: "Note-Taker",
    tech: ["Javascript", "Html5", "Css3"],
    description:
      "Um gerenciador de tarefas simples e eficiente construído com Vanilla WEB (JS, HTML e CSS).",
    report:
      "Este projeto foi desenvolvido utilizando apenas JavaScript, HTML e CSS, sem frameworks, com o objetivo de reforçar os fundamentos da web. JavaScript é responsável pela lógica de criação, remoção e persistência das tarefas. HTML fornece a estrutura semântica da aplicação, enquanto CSS é usado para estilização e organização visual.",
    tags: ["Frontend"],
    link: "https://witordev.github.io/Note-Taker/",
  },
  {
    id: 4,
    imageSrc: portfoliounifil,
    title: "Portfólio UniFil",
    tech: ["Javascript", "Html5", "Css3", "Express", "Nodedotjs", "Ejs"],
    description:
      "O meu antigo portfolio da UniFil, com relatórios de estudo e informações sobre mim e o curso de Ciência da Computação.",
    report:
      "Este projeto combina frontend e backend. O backend foi desenvolvido com Node.js e Express para gerenciamento de rotas e lógica do servidor. O EJS foi utilizado como template engine para renderizar páginas dinâmicas no servidor. JavaScript coordena a lógica geral da aplicação, enquanto HTML e CSS são responsáveis pela estrutura e estilização.",
    tags: ["Frontend", "Backend"],
    link: "https://portfolio-unifil.onrender.com/",
  },
  {
    id: 5,
    imageSrc: bleedout,
    title: "BleedOut",
    tech: ["Godotengine"],
    description:
      "Um jogo de tiro 2D top-down onde você deve avançar até o topo do mapa. Desenvolvido usando GDScript na Godot Engine.",
    report:
      "O jogo foi desenvolvido utilizando a Godot Engine, escolhida por sua eficiência em jogos 2D e facilidade de prototipação. A lógica do jogo foi implementada em GDScript, permitindo controle de movimentação, colisões e mecânicas de combate. A engine cuida do sistema de cenas, física e renderização.",
    tags: ["Game Dev"],
    link: "https://witordev.github.io/BleedOUT/",
  },
  {
    id: 6,
    imageSrc: saloon,
    title: "Saloon Manager",
    tech: ["Php", "Html5", "Css3", "Mysql"],
    description:
      "Um gerenciador de salão simples, onde você pode criar e gerenciar agendamentos de acordo com o seu cliente..",
    report:
      "Este projeto foi desenvolvido utilizando PHP para o backend, sendo responsável pela lógica de negócio, criação e gerenciamento de agendamentos e comunicação com o banco de dados. O MySQL (MariaDB) foi utilizado para persistência dos dados, armazenando informações de clientes e horários de forma estruturada. No frontend, HTML fornece a base semântica das páginas e CSS é utilizado para estilização e organização visual. A aplicação integra frontend e backend de forma direta, com o PHP renderizando e processando dados dinamicamente no servidor.",
    tags: ["Backend", "Frontend"],
    link: "https://saloonmanager.page.gd/",
  },
];
