import { useState, useEffect, useMemo, FunctionComponent } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Sidebar.css";
import { SidebarMenu } from "./SidebarMenu";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SideBar: FunctionComponent = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const [part, setPart] = useState<any>();
  const [dropdownMenu, setDropdownMene] = useState<boolean>(false);

  useMemo(() => {
    setPart(location.pathname);
  }, []);

  const goTo = (menudata: any) => {
    if (menudata.submenu.length > 0) {
      if (dropdownMenu == false) {
        setDropdownMene(true);
      } else {
        setDropdownMene(false);
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
            dropdownMenu == true && item.submenu.length > 0
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
                  dropdownMenu == true ? " open" : ""
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
                    <FiberManualRecordIcon sx={{fontSize:12}}/>
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
      <div className="sidebar-logo-top"></div>
      <div className="sidebar-menu-wrap">{menuElements}</div>
    </div>
  );
};
export default SideBar;
