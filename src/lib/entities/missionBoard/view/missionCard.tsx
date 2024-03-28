import { Rectangle } from "pixi.js";
import { Graphics, Container, Text } from "@pixi/react";
import { useUnit } from "effector-react";
import { GraphicsHelper } from "$lib/shared/ui/graphicsHelper";
import { hideMission } from "../model";
import { Mission } from "../model/types";

export function MissionCard(mission: Mission) {
  const hideMissionCard = useUnit(hideMission);
  return (
    <>
      <Graphics
        eventMode={"static"}
        hitArea={new Rectangle(0, 0, 800, 800)}
        onclick={(e) => {
          e.stopPropagation();
          hideMissionCard();
        }}
      />
      <Container width={600} height={300} position={[10, 10]}>
        <GraphicsHelper x={10} y={10} width={600} height={300} />
        <Text
          text={mission.title}
          anchor={0}
          x={80}
          y={10}
          style={{
            wordWrap: true,
            wordWrapWidth: 180,
          }}
        />
      </Container>
    </>
  );
}
