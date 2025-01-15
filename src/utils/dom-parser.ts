interface MenuItem {
  text: string;
  href: string;
  children?: MenuItem[];
}

function parseMenu(html: string): MenuItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  function parseElement(element: Element): MenuItem {
    const anchor = element.querySelector('a');
    const text = anchor?.textContent?.trim() || '';
    const href = anchor?.getAttribute('href') || '';

    const children: MenuItem[] = [];
    const subMenu = element.querySelector('ul.sub-menu');
    if (subMenu) {
      const subMenuItems = subMenu.querySelectorAll('li.menu-item');
      subMenuItems.forEach((childItem) => {
        children.push(parseElement(childItem));
      });
    }

    return { text, href, ...(children.length > 0 && { children }) };
  }

  const menuItems: MenuItem[] = [];

  const rootItems = doc.querySelectorAll('nav > ul > li.menu-item');
  rootItems.forEach((item) => {
    menuItems.push(parseElement(item));
  });

  return menuItems;
}

export type { MenuItem };
export default parseMenu;
