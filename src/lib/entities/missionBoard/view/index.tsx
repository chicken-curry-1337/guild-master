import { Container, Sprite } from "@pixi/react";
import { useState } from "react";
import { Mission } from "../model/types";
import { useUnit } from "effector-react";
import { $activeMission, $missions, showMission } from "../model";
import { MissionCard } from "./missionCard";

export function MissionBoard() {
  const [missions, activeMission] = useUnit([$missions, $activeMission]);
  return (
    <>
      <Container width={400} height={400} position={[300, 200]}>
        <Sprite
          image="./images/missionboard.png"
          width={400}
          height={400}
          anchor={0}
          x={0}
          y={0}
        ></Sprite>
        <Container width={300} height={150} position={[100, 100]}>
          {missions.map((mission) => (
            <MissionSmallCard {...mission} key={mission.id} />
          ))}
        </Container>
      </Container>

      {activeMission !== null && <MissionCard {...activeMission} />}
    </>
  );
}

function MissionSmallCard(mission: Mission) {
  const setActiveMission = useUnit(showMission);
  const [position] = useState<[number, number]>([
    Math.floor(Math.random() * 200),
    Math.floor(Math.random() * 100),
  ]);

  return (
    <Container
      width={40}
      height={60}
      anchor={0.5}
      position={position}
      onclick={(e) => {
        e.stopPropagation();
        setActiveMission(mission);
      }}
    >
      <Sprite
        interactive={true}
        image="./images/mission.png"
        width={40}
        height={60}
        anchor={0.5}
      ></Sprite>
    </Container>
  );
}
