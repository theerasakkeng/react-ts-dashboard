import { Dashboard, AccountCircle } from "@mui/icons-material";
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
    title: "Customer",
    icon: AccountCircle,
    active_icon: null,
    link: "/customer",
    submenu: [
      {
        title: "Report",
        icon: AccountCircle,
        active_icon: null,
        link: "/report",
      },
    ],
  },
];
