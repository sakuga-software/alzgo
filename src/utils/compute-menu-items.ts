import board from '../assets/navbar/menu/board.svg';
import carrosserie from '../assets/navbar/menu/carrosserie.svg';
import démarrage from '../assets/navbar/menu/démarrage.svg';
import direction from '../assets/navbar/menu/direction.svg';
import divers from '../assets/navbar/menu/divers.svg';
import eclairage from '../assets/navbar/menu/eclairage.svg';
import freinage from '../assets/navbar/menu/freinage.svg';
import habitacle from '../assets/navbar/menu/habitacle.svg';
import moteur from '../assets/navbar/menu/moteur.svg';
import multimedia from '../assets/navbar/menu/multimedia.svg';
import vitesse from '../assets/navbar/menu/vitesse.svg';
import antipollution from '../assets/navbar/menu/antipollution.svg';

import { NavbarItem } from '../types/navbar-item';
import { MenuItem } from './dom-parser';
import { BASE_URL } from './env';

const imgMap: { [key: string]: string } = {
  'tableau de bord': board,
  carrosserie,
  démarrage,
  direction,
  divers,
  éclairage: eclairage,
  freinage,
  habitacle,
  moteur,
  multimédia: multimedia,
  'boîte de vitesse': vitesse,
  antipollution,
};

function enhanceMenuWithCustomKeys(menuItems: MenuItem[]): NavbarItem[] {
  return menuItems.map((item) => {
    const id = item.text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
    const to = item.href.replace(BASE_URL, '');
    const img = imgMap[item.text.toLowerCase()] || board;

    return {
      id,
      label: item.text,
      to,
      img,
      children: item.children ? enhanceMenuWithCustomKeys(item.children) : [],
    };
  });
}

export { enhanceMenuWithCustomKeys };
