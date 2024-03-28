import { Container, Sprite } from "@pixi/react";
import { useState } from "react";
import { Mission } from "../model/types";
import { useUnit } from "effector-react";
import { $missions, showMission } from "../model";

export function MissionBoard({
  scale = 1,
  position = [0, 0],
}: {
  scale?: number;
  position?: [number, number];
}) {
  const [missions] = useUnit([$missions]);

  return (
    <Container position={position} anchor={0.5} scale={scale}>
      <Container position={[0, 0]} anchor={0.5}>
        <Sprite
          image="./images/missionboard.png"
          width={400}
          height={400}
          anchor={0.5}
          x={0}
          y={0}
        ></Sprite>
        <Container anchor={0.5} x={-100} y={-100}>
          {missions.map((mission) => (
            <MissionSmallCard
              offsetX={400 / 2}
              offsetY={400 / 3}
              mission={mission}
              key={mission.id}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
}

function MissionSmallCard({
  mission,
  offsetX = 0,
  offsetY = 0,
}: {
  mission: Mission;
  offsetX: number;
  offsetY: number;
}) {
  const setActiveMission = useUnit(showMission);
  const [position] = useState<[number, number]>([
    Math.floor(Math.random() * offsetX),
    Math.floor(Math.random() * offsetY),
  ]);

  return (
    <Container anchor={0.5} position={position} eventMode="static">
      <Sprite
        interactive
        image="./images/mission.png"
        width={40}
        height={60}
        anchor={0.5}
        onclick={(e) => {
          e.stopPropagation();
          setActiveMission(mission);
        }}
      ></Sprite>
    </Container>
  );
}
