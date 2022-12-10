import { useState, FunctionComponent } from "react";
import "./NavbarTop.css";

import { Menu } from "@mui/icons-material";

const NavbarTop: FunctionComponent = () => {
  const [miniMenu, setMiniMenu] = useState<boolean>(false);
  const [navbarCalcWidth, setNavbarCalcWidth] = useState<number>(240);

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
        </div>
        <div className="navbar-top-item-right">5555</div>
      </div>
    </div>
  );
};
export default NavbarTop;
