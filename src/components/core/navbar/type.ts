/**
 * We could move this to /types folder, but since it's a small file, we can keep it here.
 */

export type NavbarItem = {
  id: string;
  label: string | number | boolean;
  to: string;
  img?: string;
  children?: NavbarItem[];
};
