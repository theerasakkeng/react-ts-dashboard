import { useState, FunctionComponent } from "react";
import "./NavbarTop.css";

const NavbarTop: FunctionComponent = () => {
  const [miniMenu, setMiniMenu] = useState<boolean>(false);

  const onToggleMiniMenu = () => {
    setMiniMenu((prevcheck) => !prevcheck);
    let element = document.querySelector(".sidebar-wrap");
    if (element) {
      element.classList.add("mini");
    }
    if (miniMenu == true) {
      let elementMini = document.querySelector(".mini");
      if (elementMini) {
        elementMini.classList.remove("mini");
      }
    }
  };

  return (
    <div className="navbar-top-wrap">
      <div onClick={onToggleMiniMenu}>กด</div>
    </div>
  );
};
export default NavbarTop;
