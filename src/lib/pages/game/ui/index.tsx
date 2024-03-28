import { NavLink, Outlet } from "react-router-dom";
import InGameMenu from "./InGameMenu";
import { GameStage } from "$lib/widgets/gameStage/ui/GameStage";
import { GameScreen, SideMenu, PlaceholderbackgroundImage } from "./styles";
import { TextStyle } from "pixi.js";
import { Stage, Container, Text } from "@pixi/react";
import { MissionBoard } from "$lib/entities/missionBoard/view";

export function Game() {
  return (
    <GameScreen>
      <PlaceholderbackgroundImage src="/images/tavern-bg.png" />
      {/* todo: добавить изображение таверны, возможно, при помощи pixi.js */}
      <Outlet />
      <GameStage>
        {/* <Container x={200} y={200}>
          <Text
            text="Hello World"
            anchor={0.5}
            x={220}
            y={150}
            style={
              new TextStyle({
                align: "center",
                fill: "0xffffff",
                fontSize: 50,
                letterSpacing: 20,
                dropShadow: true,
                dropShadowColor: "#E72264",
                dropShadowDistance: 6,
              })
            }
          />
        </Container> */}
        <MissionBoard />
      </GameStage>
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
