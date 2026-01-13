export interface MenuItem {
  menuName: string;
  menuIcon?: string;
  menuPath?: string;
  children?: MenuItem[];
  menuType?: string;
  expanded?: boolean;
}
