import { useCallback, useEffect, useState } from "react";
import { MenuContainer, MenuWrapper } from "./styles";

export default function InGameMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const escFunction = useCallback((event: any) => {
    if (event.key === "Escape") {
      // todo: play/pause game & обрабатывать клик только когда другие всплывающие меню не открыты
      setShowMenu((showMenu) => !showMenu);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    showMenu && (
      <MenuWrapper>
        <MenuContainer>
          <h3>Menu</h3>
          <ul>
            <li>save game</li>
            <li>load game</li>
            <li>main menu</li>
          </ul>
        </MenuContainer>
      </MenuWrapper>
    )
  );
}
