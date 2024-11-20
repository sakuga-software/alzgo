const siteStructure = {
  id: "home",
  label: "Accueil",
  to: "/",
  children: [
    {
      id: "products",
      label: "Produits",
      to: "/products",
      children: [
        { id: "products-body", label: "Carrosserie", to: "/products/body" },
        {
          id: "products-starting",
          label: "Démarrage",
          to: "/products/starting",
        },
        {
          id: "products-steering",
          label: "Direction",
          to: "/products/steering",
        },
        {
          id: "products-miscellaneous",
          label: "Divers",
          to: "/products/miscellaneous",
        },
        {
          id: "products-lighting",
          label: "Éclairage",
          to: "/products/lighting",
        },
        { id: "products-braking", label: "Freinage", to: "/products/braking" },
        { id: "products-cabin", label: "Habitacle", to: "/products/cabin" },
        { id: "products-engine", label: "Moteur", to: "/products/engine" },
        {
          id: "products-multimedia",
          label: "Multimedia",
          to: "/products/multimedia",
        },
        {
          id: "products-dashboard",
          label: "Tableau de bord",
          to: "/products/dashboard",
        },
      ],
    },
    {
      id: "repairs-and-services",
      label: "Réparations et services",
      to: "/repairs-and-services",
      children: [
        {
          id: "services-antipollution",
          label: "Antipollution",
          to: "/repairs-and-services/antipollution",
        },
        {
          id: "services-gearbox",
          label: "Boîte de vitesse",
          to: "/repairs-and-services/gearbox",
        },
        {
          id: "services-starting",
          label: "Démarrage",
          to: "/repairs-and-services/starting",
        },
        {
          id: "services-steering",
          label: "Direction",
          to: "/repairs-and-services/steering",
        },
        {
          id: "services-miscellaneous",
          label: "Divers",
          to: "/repairs-and-services/miscellaneous",
        },
        {
          id: "services-lighting",
          label: "Éclairage",
          to: "/repairs-and-services/lighting",
        },
        {
          id: "services-braking",
          label: "Freinage",
          to: "/repairs-and-services/braking",
        },
        {
          id: "services-cabin",
          label: "Habitacle",
          to: "/repairs-and-services/cabin",
        },
        {
          id: "services-engine",
          label: "Moteur",
          to: "/repairs-and-services/engine",
        },
        {
          id: "services-multimedia",
          label: "Multimedia",
          to: "/repairs-and-services/multimedia",
        },
        {
          id: "services-dashboard",
          label: "Tableau de bord",
          to: "/repairs-and-services/dashboard",
        },
      ],
    },
    {
      id: "news",
      label: "Actualités",
      to: "/news",
      children: [
        { id: "article-1", label: "Article 1", to: "/news/article-1" },
        { id: "article-2", label: "Article 2", to: "/news/article-2" },
        { id: "article-3", label: "Article 3", to: "/news/article-3" },
        { id: "article-4", label: "Article 4", to: "/news/article-4" },
        { id: "article-etc", label: "etc", to: "/news/etc" },
      ],
    },
    {
      id: "about",
      label: "À propos",
      to: "/about",
      children: [],
    },
    {
      id: "contact",
      label: "Contact",
      to: "/contact",
      children: [],
    },
  ],
};

export default siteStructure;
