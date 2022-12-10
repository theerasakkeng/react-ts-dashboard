import DashboardIcon from "@mui/icons-material/Dashboard";
import { SidebarMenuInterface } from "../../interface/sidebar";

export const SidebarMenu: SidebarMenuInterface[] = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    active_icon: null,
    link: "/dashboard",
    submenu: [],
  },
  {
    title: "Customer",
    icon: DashboardIcon,
    active_icon: null,
    link: "/customer",
    submenu: [
      {
        title: "Report",
        icon: DashboardIcon,
        active_icon: null,
        link: "/report",
      },
    ],
  },
];
