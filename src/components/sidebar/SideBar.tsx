import { useState, useEffect, useMemo, FunctionComponent } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Sidebar.css";
import { SidebarMenu } from "./SidebarMenu";

const SideBar: FunctionComponent = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const [part, setPart] = useState<any>();
  const [dropdownMenu, setDropdownMene] = useState<boolean>(false);

  useMemo(() => {
    setPart(location.pathname);
  }, []);

  const goTo = (menudata: any) => {
    console.log(menudata.submenu.length);
    if (menudata.submenu.length > 0) {
      setDropdownMene((prev) => !prev);
    } else if (menudata.submenu.length == 0) {
      navigate(menudata.link);
      setPart(menudata.link);
    }
  };

  const menuElements = SidebarMenu.map((item, index) => {
    const { title, link } = item;
    return (
      <div
        key={index}
        className={`menu-wrap${
          part == item.link && dropdownMenu == false ? " active" : ""
        }${
          dropdownMenu == true && item.submenu.length > 0
            ? " dropdown-active"
            : ""
        }`}
        onClick={() => goTo(item)}
      >
        <div className="icon-wrap">
          <item.icon />
        </div>
        <div>{title}</div>
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
