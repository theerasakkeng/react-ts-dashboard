import { useState, useEffect, useMemo, FunctionComponent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavbarTop.css";

import { SidebarMenu } from "../../components/sidebar/SidebarMenu";
import { Menu } from "@mui/icons-material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const NavbarTop: FunctionComponent = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const [miniMenu, setMiniMenu] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [part, setPart] = useState<any>();
  const [dropdownMenu, setDropdownMene] = useState<boolean>(false);
  const [navbarCalcWidth, setNavbarCalcWidth] = useState<number>(240);

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
      setMobileMenu(false);
      navigate(menudata.link);
      setPart(menudata.link);
    }
  };

  const goToSubmenu = (submenu_data: any) => {
    setMobileMenu(false);
    navigate(submenu_data.link);
    setPart(submenu_data.link);
  };

  const onToggleMiniMenu = () => {
    setMiniMenu((prevcheck) => !prevcheck);
    setNavbarCalcWidth(64);
    let elementSidebar = document.querySelector(".sidebar-wrap");
    let elementContent = document.querySelector(".content-wrap");
    if (elementSidebar) {
      elementSidebar.classList.add("mini");
    }
    if (elementContent) {
      elementContent.classList.add("content-wrap-responsive-mini");
    }
    if (miniMenu == true) {
      setNavbarCalcWidth(240);
      let elementMini = document.querySelector(".mini");
      let elementContentResponsive = document.querySelector(
        ".content-wrap-responsive-mini"
      );
      if (elementMini) {
        elementMini.classList.remove("mini");
      }
      if (elementContentResponsive) {
        elementContentResponsive.classList.remove(
          "content-wrap-responsive-mini"
        );
      }
    }
  };

  const onToggleMenuMobile = () => {
    setMobileMenu((show) => !show);
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
    <div
      className="navbar-top-wrap"
      style={{ width: `calc(100% - ${navbarCalcWidth}px)` }}
    >
      <div className="navbar-top-item">
        <div className="navbar-top-item-left">
          <div onClick={onToggleMiniMenu} className="icon-menu">
            <Menu sx={{ fontSize: 30 }} />
          </div>
          <div onClick={onToggleMenuMobile} className="icon-menu-mobile">
            <Menu sx={{ fontSize: 30 }} />
          </div>
        </div>
        <div className="navbar-top-item-right">5555</div>
      </div>
      <div
        className={`mobile-menu-sidebar-backdrop${
          mobileMenu == true ? " show-menu-mobile" : ""
        }`}
        onClick={onToggleMenuMobile}
      ></div>
      <div
        className={`sidebar-mobile-container${
          mobileMenu == true ? " show-menu-mobile" : ""
        }`}
      >
        <div className="sidebar-mobile-wrap">
          <div className="sidebar-logo-top"></div>
          <div className="sidebar-menu-wrap">{menuElements}</div>
        </div>
      </div>
    </div>
  );
};
export default NavbarTop;
