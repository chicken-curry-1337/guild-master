import { Container, Sprite, Graphics } from "@pixi/react";
import { useCallback, useEffect, useState } from "react";

function createMissions() {
  const missions = [];
  for (let i = 0; i < 20; i++) {
    missions[i] = {
      title: "",
      id: i,
    };
  }

  return missions;
}

function GraphicsExample() {
  const draw = useCallback((g) => {
    g.clear();
    g.lineStyle(2, 0x0000ff, 1);
    g.beginFill(0xff700b, 1);
    g.drawRect(0, 0, 200, 150);
    g.endFill();
  }, []);

  return <Graphics draw={draw} />;
}

export function MissionBoard() {
  const [missions] = useState<Mission[]>(createMissions());
  return (
    <Container width={400} height={400} position={[300, 200]}>
      <Sprite
        image="./images/missionboard.png"
        width={400}
        height={400}
        anchor={0}
        x={0}
        y={0}
      ></Sprite>
      {/* <GraphicsExample></GraphicsExample> */}
      <Container
        width={300}
        height={150}
        position={[100, 100]}
        options={{ backgroundColor: 0x000000 }}
      >
        {missions.map((mission) => (
          <MissionCard {...mission} key={mission.id} />
        ))}
      </Container>
    </Container>
  );
}

type Mission = {
  title: string;
  id: number;
};

function MissionCard(mission: Mission) {
  const [position] = useState([
    Math.floor(Math.random() * 200),
    Math.floor(Math.random() * 100),
  ]);

  useEffect(() => {
    console.log({ position });
  }, [position]);

  return (
    <Container
      width={40}
      height={60}
      anchor={0.5}
      position={position}
      onclick={(e) => {
        e.stopPropagation();
        // todo: show modal with mission interaction
        console.log(e, "clicked");
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
