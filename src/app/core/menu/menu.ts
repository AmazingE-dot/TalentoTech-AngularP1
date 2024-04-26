import { PATH } from "../enum/path.enum";
import { MenuInfoInterface } from "../interface/menu_info.interface";

export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.INICIO,
    title: 'Home',
    icon: 'fa-solid fa-house',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.IMAGE,
    title: 'Image',
    icon: 'fa-solid fa-image',
    classCss: '',
    subMenu: [
      {
        path: PATH.IMAGE,
        title: 'Imagen',
        icon: 'fa-solid fa-image',
        classCss: '',
        subMenu: [],
      },
    ],
  },
  {
    path: PATH.NAME,
    title: 'Name',
    icon: 'fa-solid fa-user',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.ABOUT,
    title: 'About',
    icon: '',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.CONTACT,
    title: 'Contact Us',
    icon: '',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.USUARIOS,
    title: 'Usuarios',
    icon: '',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.PRODUCTS,
    title: 'Productos',
    icon: '',
    classCss: '',
    subMenu: [],
  },
];
