export type NavbarItem = {
  id: string;
  label: string | number | boolean;
  to: string;
  img?: string;
  children?: NavbarItem[];
};
