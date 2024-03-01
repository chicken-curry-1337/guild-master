import { NavLink, Outlet } from "react-router-dom";
import InGameMenu from "./InGameMenu";
import { GameScreen, SideMenu, PlaceholderbackgroundImage } from "./styles";

export function Game() {
  return (
    <GameScreen>
      <PlaceholderbackgroundImage src="/images/tavern-bg.png" />
      {/* todo: добавить изображение таверны, возможно, при помощи pixi.js */}
      <Outlet />
      <SideMenu>
        <ul>
          <li>
            <NavLink to="/game/chars">Chars</NavLink>
          </li>
          <li>
            <NavLink to="/game/missions">Missions</NavLink>
          </li>
        </ul>
      </SideMenu>
      <InGameMenu />
    </GameScreen>
  );
}
