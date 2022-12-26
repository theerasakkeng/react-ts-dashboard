import { Dashboard, AccountCircle, Map,Store } from "@mui/icons-material";
import { SidebarMenuInterface } from "../../interface/sidebar";

export const SidebarMenu: SidebarMenuInterface[] = [
  {
    title: "Dashboard",
    icon: Dashboard,
    active_icon: null,
    link: "/dashboard",
    submenu: [],
  },
  {
    title: "Customers",
    icon: AccountCircle,
    active_icon: null,
    link: "",
    submenu: [
      {
        title: "Customer List",
        icon: null,
        active_icon: null,
        link: "/customers/customers-list",
        submenu: [],
      },
    ],
  },
  {
    title: "Map",
    icon: Map,
    active_icon: null,
    link: "",
    submenu: [
      {
        title: "Leaflet",
        icon: null,
        active_icon: null,
        link: "/map/leaflet",
        submenu: [],
      },
      {
        title: "Map Libre",
        icon: null,
        active_icon: null,
        link: "/map/map-libre",
        submenu: [],
      },
      {
        title: "Google Map",
        icon: null,
        active_icon: null,
        link: "/map/google-map",
        submenu: [],
      },
    ],
  },
  {
    title: "Store",
    icon: Store,
    active_icon: null,
    link: "",
    submenu: [
      {
        title: "Product",
        icon: null,
        active_icon: null,
        link: "/store/products",
        submenu: [],
      },
    ],
  },
];
