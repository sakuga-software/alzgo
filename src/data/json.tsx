import board from "../assets/navbar/menu/board.png";
import carrosserie from "../assets/navbar/menu/carrosserie.png";
import démarrage from "../assets/navbar/menu/démarrage.png";
import direction from "../assets/navbar/menu/direction.png";
import divers from "../assets/navbar/menu/divers.png";
import eclairage from "../assets/navbar/menu/eclairage.png";
import freinage from "../assets/navbar/menu/freinage.png";
import habitacle from "../assets/navbar/menu/habitacle.png";
import moteur from "../assets/navbar/menu/moteur.png";
import multimedia from "../assets/navbar/menu/multimedia.png";
import vitesse from "../assets/navbar/menu/vitesse.png";
import antipollution from "../assets/navbar/menu/antipollution.png";

const siteStructure = {
  id: "home",
  label: "Accueil",
  to: "/",
  children: [
    {
      id: "Accueil",
      label: "Accueil",
      to: "/",
      children: [],
    },
    {
      id: "products",
      label: "Pièces",
      to: "/products",
      children: [
        {
          id: "products-dashboard",
          label: "Tableau de bord",
          to: "/products/dashboard",
          img: board,
          children: [
            {
              id: "piece-dashboard-LCD",
              label: "Afficheur LCD",
              to: "/piece/dashboard/LCD",
            },
            {
              id: "piece-dashboard-multi",
              label: "Afficheur Multifonction",
              to: "/piece/dashboard/multi",
            },
          ],
        },
        {
          id: "products-starting",
          label: "Démarrage",
          to: "/products/starting",
          img: démarrage,
          children: [
            {
              id: "piece-starting-key",
              label: "Clé complète",
              to: "/piece/starting/key",
            },
            {
              id: "piece-starting/protect",
              label: "Coque de clef",
              to: "/piece/starting/protect",
            },
            {
              id: "piece-starting-EZS",
              label: "EZS/Commutateur d’allumage",
              to: "/piece/starting/EZS",
            },
            {
              id: "piece-starting-card",
              label: "Lecteur de carte",
              to: "/piece/starting/card",
            },
            {
              id: "piece-starting-NEIMAN",
              label: "NEIMAN/Bague",
              to: "/piece/starting/NEIMAN",
            },
          ],
        },
        {
          id: "products-steering",
          label: "Direction",
          to: "/products/steering",
          img: direction,
          children: [
            {
              id: "piece-steering-DAE",
              label: "Direction assistée - DAE - Colonne",
              to: "/piece/steering/DAE",
            },
            {
              id: "piece-steering-locker",
              label: "Verrou de colonne",
              to: "/piece/steering/locker",
            },
            {
              id: "piece-steering-emulateur",
              label: "Émulateur verrou",
              to: "/piece/steering/emulateur",
            },
          ],
        },
        {
          id: "products-body",
          label: "Carrosserie",
          to: "/products/body",
          img: carrosserie,
          children: [
            {
              id: "piece-body-retro",
              label: "Retroviseur / Baguette",
              to: "/piece/body/retro",
            },
            {
              id: "piece-body-locker",
              label: "Serrure / Poignée",
              to: "/piece/body/locker",
            },
          ],
        },
        {
          id: "products-multimedia",
          label: "Multimedia",
          to: "/products/multimedia",
          img: multimedia,
          children: [
            {
              id: "piece-multimedia-GPS",
              label: "Écan GPS",
              to: "/piece/multimedia/GPS",
            },
            {
              id: "piece-multimedia-Autoradio",
              label: "Autoradio",
              to: "/piece/multimedia/Autoradio",
            },
          ],
        },
        {
          id: "products-miscellaneous",
          label: "Divers",
          to: "/products/miscellaneous",
          img: divers,
          children: [
            {
              id: "piece-miscellaneous-adBlue",
              label: "Suppression système AD Blue",
              to: "/piece/miscellaneous/adBlue",
            },
            {
              id: "piece-miscellaneous-EGR",
              label: "Suppression EGR",
              to: "/piece/miscellaneous/EGR",
            },
            {
              id: "piece-miscellaneous-FAP",
              label: "Suppression FAP",
              to: "/piece/miscellaneous/FAP",
            },
            {
              id: "piece-miscellaneous-cleanFAP",
              label: "Nettoyage FAP",
              to: "/piece/miscellaneous/cleanFAP",
            },
          ],
        },
        {
          id: "products-engine",
          label: "Moteur",
          to: "/products/engine",
          img: moteur,
          children: [
            {
              id: "piece-engine-BSM",
              label: "BSM",
              to: "/piece/engine/BSM",
            },
            {
              id: "piece-engine-alculateur",
              label: "Calculateur",
              to: "/piece/engine/calculateur",
            },
            {
              id: "piece-engine-debimetre",
              label: "Débimètre",
              to: "/piece/engine/debimetre",
            },
            {
              id: "piece-engine-reconFAP",
              label: "FAP reconditionné",
              to: "/piece/engine/reconFAP",
            },
            {
              id: "piece-engine-FAP",
              label: "FAP",
              to: "/piece/engine/FAP",
            },
            {
              id: "piece-engine-injection",
              label: "Module de pompe à injection ISUZU",
              to: "/piece/engine/injection",
            },
            {
              id: "piece-engine-UPC",
              label: "UPC / USM",
              to: "/piece/engine/UPC",
            },
          ],
        },
        {
          id: "products-cabin",
          label: "Habitacle",
          to: "/products/cabin",
          img: habitacle,
          children: [
            {
              id: "piece-cabin-Alfa",
              label: "BCM / UCH Fiat / Alfa",
              to: "/piece/cabin/Alfa",
            },
            {
              id: "piece-cabin-CAS",
              label: "Boitier CAS / FRM",
              to: "/piece/cabin/CAS",
            },
            {
              id: "piece-cabin-BSI",
              label: "BSI",
              to: "/piece/cabin/BSI",
            },
            {
              id: "piece-cabin-airbag",
              label: "Calculateur airbag / airbag",
              to: "/piece/cabin/airbag",
            },
            {
              id: "piece-cabin-start&Stop",
              label: "Calculateur Start & Stop",
              to: "/piece/cabin/start&Stop",
            },
            {
              id: "piece-cabin-Comodo",
              label: "Comodo",
              to: "/piece/cabin/Comodo",
            },
            {
              id: "piece-cabin-confort",
              label: "Module de confort",
              to: "/piece/cabin/confort",
            },
            {
              id: "piece-cabin-frein",
              label: "Module de frein à main",
              to: "/piece/cabin/frein",
            },
            {
              id: "piece-cabin-glace",
              label: "Moteur lève-vitre / essuie glace",
              to: "/piece/cabin/glace",
            },
            {
              id: "piece-cabin-SAM",
              label: "SAM",
              to: "/piece/cabin/SAM",
            },
            {
              id: "piece-cabin-UCH",
              label: "UCH / BCM",
              to: "/piece/cabin/UCH",
            },
            {
              id: "piece-cabin-ventillation",
              label: "Ventillation habitacle",
              to: "/piece/cabin/ventillation",
            },
            {
              id: "piece-cabin-volant",
              label: "Volant",
              to: "/piece/cabin/volant",
            },
          ],
        },
        {
          id: "products-braking",
          label: "Freinage",
          to: "/products/braking",
          img: freinage,
          children: [
            {
              id: "piece-braking-calculateur",
              label: "Calculateur ABS / BVA / ESP / ASR",
              to: "/piece/braking/calculateur",
            },
          ],
        },
        {
          id: "products-lighting",
          label: "Éclairage",
          to: "/products/lighting",
          img: eclairage,
          children: [
            {
              id: "piece-lighting-product",
              label: "Phares / Feux / Clignotant",
              to: "/piece/lighting/product",
            },
          ],
        },
      ],
    },
    {
      id: "repairs-and-services",
      label: "Réparations et services",
      to: "/repairs-and-services",
      children: [
        {
          id: "services-dashboard",
          label: "Tableau de bord",
          to: "/repairs-and-services/dashboard",
          img: board,
          children: [
            {
              id: "services-dashboard-compteur",
              label: "Réparation compteur",
              to: "/repairs-and-services/dashboard/compteur",
            },
            {
              id: "services-dashboard",
              label: "Réparateur afficheur mutifonction",
              to: "/repairs-and-services/dashboard",
            },
            {
              id: "services-dashboard-reprogrammation",
              label: "Reprogrammation",
              to: "/repairs-and-services/dashboard/reprogrammation",
            },
          ],
        },
        {
          id: "services-engine",
          label: "Moteur",
          to: "/repairs-and-services/engine",
          img: moteur,
          children: [
            {
              id: "services-motor-suppression",
              label: "Suppression code DTC / OBD",
              to: "/repairs-and-services/motor/supression",
            },
            {
              id: "services-motor-injection",
              label: "Réparation module de pompe à injection",
              to: "/repairs-and-services/motor/injection",
            },
            {
              id: "services-motor-reprogrammation",
              label: "Reprogrammation puissance moteur",
              to: "/repairs-and-services/motor/reprogrammation",
            },
            {
              id: "services-motor-calculator",
              label: "Réparation calculateur moteur",
              to: "/repairs-and-services/motor/calculator",
            },
          ],
        },
        {
          id: "services-gearbox",
          label: "Boîte de vitesse",
          to: "/repairs-and-services/gearbox",
          img: vitesse,
          children: [
            {
              id: "services-gearbox-levier",
              label: "Réparation levier boite de vitesse",
              to: "/repairs-and-services/gearbox/levier",
            },
            {
              id: "services-gearbox-sélectionneur",
              label: "Réparation sélectionneur de vitesse",
              to: "/repairs-and-services/gearbox/sélectionneur",
            },
          ],
        },
        {
          id: "services-steering",
          label: "Direction",
          to: "/repairs-and-services/steering",
          img: direction,
          children: [
            {
              id: "services-steering-verrou",
              label: "Réparation verrou de colonne",
              to: "/repairs-and-services/steering/verrou",
            },
            {
              id: "services-steering-direction",
              label: "Réparation colonne de direction",
              to: "/repairs-and-services/steering/direction",
            },
          ],
        },
        {
          id: "services-cabin",
          label: "Habitacle",
          to: "/repairs-and-services/cabin",
          img: habitacle,
          children: [
            {
              id: "services-cabin-bsi",
              label: "Réparation BSI / UCH",
              to: "/repairs-and-services/cabin/bsi",
            },
            {
              id: "services-cabin-airbag",
              label: "Réparation calculateur Airbag",
              to: "/repairs-and-services/airbag",
            },
            {
              id: "services-cabin-resistance",
              label: "Réparation résistance de chauffage",
              to: "/repairs-and-services/cabin/resistance",
            },
            {
              id: "services-cabin-comodo",
              label: "Réparation comodo",
              to: "/repairs-and-services/cabin/comodo",
            },
          ],
        },
        {
          id: "services-antipollution",
          label: "Antipollution",
          to: "/repairs-and-services/antipollution",
          img: antipollution,
          children: [
            {
              id: "services-antipollution-compteur",
              label: "Suppression système AD Blue",
              to: "/repairs-and-services/antipollution/compteur",
            },
            {
              id: "services-antipollution-egr",
              label: "Suppression EGR",
              to: "/repairs-and-services/antipollution/egr",
            },
            {
              id: "services-antipollution-suppFap",
              label: "Suppression FAP",
              to: "/repairs-and-services/antipollution/suppFap",
            },
            {
              id: "services-antipollution-cleandFap",
              label: "Nettoyage FAP",
              to: "/repairs-and-services/antipollution/cleandFap",
            },
          ],
        },
        {
          id: "services-multimedia",
          label: "Multimedia",
          to: "/repairs-and-services/multimedia",
          img: multimedia,
          children: [
            {
              id: "services-multimedia-radio",
              label: "Réparation auto radio",
              to: "/repairs-and-services/multimedia/radio",
            },
            {
              id: "services-multimedia-screen",
              label: "Réparation écran",
              to: "/repairs-and-services/multimedia/screen",
            },
          ],
        },
        {
          id: "services-starting",
          label: "Démarrage",
          to: "/repairs-and-services/starting",
          img: "../assets/navbar/menu/démarrage.svg",
          children: [
            {
              id: "services-starting-key",
              label: "Réparation clef / carte",
              to: "/repairs-and-services/starting/key",
            },
            {
              id: "services-starting-suppStarting",
              label: "Suppression anti-démarrage",
              to: "/repairs-and-services/starting/suppStarting",
            },
            {
              id: "services-starting-Codage",
              label: "Codage",
              to: "/repairs-and-services/starting/Codage",
            },
          ],
        },
        {
          id: "services-braking",
          label: "Freinage",
          to: "/repairs-and-services/braking",
          img: freinage,
          children: [
            {
              id: "services-braking-repairs",
              label: "Réparation module frein de parking",
              to: "/repairs-and-services/braking/repairs",
            },
            {
              id: "services-braking-reprogrammation",
              label: "Reprogrammation bloc ABS",
              to: "/repairs-and-services/braking",
            },
            {
              id: "services-braking-virginisation",
              label: "Virginisation bloc ABS",
              to: "/repairs-and-services/braking/Virginisation",
            },
          ],
        },
        {
          id: "services-lighting",
          label: "Éclairage",
          to: "/repairs-and-services/lighting",
          img: eclairage,
          children: [
            {
              id: "services-lighting-repairs",
              label: "Réparation phares",
              to: "/repairs-and-services/lighting/repairs",
            },
          ],
        },
        {
          id: "services-miscellaneous",
          label: "Divers",
          to: "/repairs-and-services/miscellaneous",
          img: divers,
          children: [
            {
              id: "services-miscellaneous-repairs",
              label: "Réparation chargeur batterie",
              to: "/repairs-and-services/miscellaneous/repairs",
            },
            {
              id: "services-miscellaneous-fees",
              label: "Frais de port",
              to: "/repairs-and-services/miscellaneous/fees",
            },
          ],
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
