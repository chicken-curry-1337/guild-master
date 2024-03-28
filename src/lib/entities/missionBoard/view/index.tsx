import { Container, Sprite } from "@pixi/react";
import { useState } from "react";
import { Mission } from "../model/types";
import { useUnit } from "effector-react";
import { $activeMission, $missions, showMission } from "../model";
import { MissionCard } from "./missionCard";

export function MissionBoard({ scale = 1 }: { scale: number }) {
  const [missions, activeMission] = useUnit([$missions, $activeMission]);

  return (
    <Container position={[0, 0]} anchor={0.5}>
      <Container position={[0, 0]} anchor={0.5} scale={scale}>
        <Sprite
          image="./images/missionboard.png"
          width={400}
          height={400}
          anchor={0}
          x={0}
          y={0}
        ></Sprite>
        <Container position={[100, 100]}>
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
