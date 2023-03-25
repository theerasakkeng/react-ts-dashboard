import { useState, useEffect, useMemo, FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Sidebar.css";
import { SidebarMenu } from "./SidebarMenu";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SideBar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [part, setPart] = useState<any>();
  const [dropdownMenu, setDropdownMene] = useState<boolean>(false);
  const [sideBar, setSideBar] = useState<string>("");

  useMemo(() => {
    setPart(location.pathname);
  }, []);

  const goTo = (menudata: any) => {
    if (menudata.submenu.length > 0) {
      if(menudata.title == sideBar){
        setDropdownMene(prev => !prev);
        setSideBar(menudata.title);
      }else {
        setDropdownMene(true);
        setSideBar(menudata.title);
      }
    } else if (menudata.submenu.length == 0) {
      setDropdownMene(false);
      navigate(menudata.link);
      setPart(menudata.link);
    }
  };

  const goToSubmenu = (submenu_data: any) => {
    navigate(submenu_data.link);
    setPart(submenu_data.link);
  };

  const menuElements = SidebarMenu.map((item, index) => {
    return (
      <div className="menu-group" key={index}>
        <div
          className={`menu-wrap${part == item.link ? " active" : ""}${
            dropdownMenu == true &&
            item.submenu.length > 0 &&
            item.title == sideBar
              ? " dropdown-active"
              : ""
          }`}
          onClick={() => goTo(item)}
        >
          <div className="icon-wrap">
            <item.icon />
          </div>
          <div>{item.title}</div>
        </div>
        {item.submenu.map((subitem, index) => {
          if (item.submenu.length > 0) {
            return (
              <div
                className={`submenu-dropdown${
                  dropdownMenu == true && item.title == sideBar ? " open" : ""
                }`}
                key={index}
              >
                <div
                  className={`menu-wrap${
                    part == subitem.link ? " active" : ""
                  }`}
                  onClick={() => goToSubmenu(subitem)}
                >
                  <div className="icon-submenu">
                    <FiberManualRecordIcon sx={{ fontSize: 12 }} />
                  </div>
                  <div>{subitem.title}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  });
  return (
    <div className="sidebar-wrap">
      <div className="sidebar-logo-top">
        <div onClick={() => navigate("/")}>Home</div>
      </div>
      <div className="sidebar-menu-wrap">{menuElements}</div>
    </div>
  );
};
export default SideBar;
