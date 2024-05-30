export const navItems = [
  { name: "Обо мне", link: "#about" },
  { name: "Проекты", link: "#projects" },
  // { name: "Рекомендации", link: "#testimonials" },
  { name: "Подход", link: "#approach" },
  { name: "Контакты", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "VPN Helios",
    des: "VPN для безопасного и анонимного интернет-серфинга",
    img: "/banners/helios.png",
    iconLists: [
      "/icons/rust.png",
      "/icons/flutter.png",
      "/icons/next.svg",
      "/icons/wireguard.png",
      "/icons/outline.png",
    ],
    link: "https://github.com/orgs/HeliosShieldProject/repositories",
    text: "Репозиторий",
  },
  {
    id: 2,
    title: "Galactic",
    des: "Галактический лендинг с анимациями и футуристичным дизайном",
    img: "/banners/galactic.png",
    iconLists: [
      "/icons/next.svg",
      "/icons/tailwind.svg",
      "/icons/ts.svg",
      "/icons/framer-motion.svg",
    ],
    link: "https://galactic.michkoff.com/",
    text: "Сайт",
  },
  {
    id: 3,
    title: "HooBank",
    des: "Банковский лендинг с неоновым дизайном",
    img: "/banners/hoo-bank.png",
    iconLists: ["/icons/next.svg", "/icons/tailwind.svg", "/icons/ts.svg"],
    link: "https://hoo-bank.michkoff.com/",
    text: "Сайт",
  },
  {
    id: 4,
    title: "Musify",
    des: "Музыкальная платформа с любимой музыкой. Spotify Clone",
    img: "/banners/musify.png",
    iconLists: [
      "/icons/next.svg",
      "/icons/tailwind.svg",
      "/icons/ts.svg",
      "/icons/supabase.png",
    ],
    link: "https://github.com/ParzivalEugene/Musify",
    text: "Репозиторий",
  },
];

export const testimonials = [
  {
    quote: "Вован скажет тут какой же я пиздатый боже",
    name: "Владимир Денисов",
    title: "Пиздатый тип тинькофф",
    avatar: "/avatars/vladimir-denisov.jpg",
  },
];
