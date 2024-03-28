import { Rectangle } from "pixi.js";
import { Container, Text } from "@pixi/react";
import { useUnit } from "effector-react";
import { GraphicsHelper } from "$lib/shared/ui/graphicsHelper";
import { Modal } from "$lib/entities/gameScale/ui";
import { GameScaleContext } from "$lib/entities/gameScale/model";
import { hideMission } from "../model";
import { Mission } from "../model/types";

export function MissionCard({ mission }: { mission: Mission }) {
  const hideMissionCard = useUnit(hideMission);
  return (
    <GameScaleContext.Consumer>
      {(scale) => (
        <Container scale={scale}>
          <Modal
            onOutsideClick={() => {
              hideMissionCard();
            }}
          >
            <Container
              position={[10, 10]}
              anchor={0.5}
              zIndex={2}
              eventMode="static"
              hitArea={new Rectangle(0, 0, 400, 200)}
              width={400}
              height={200}
            >
              <GraphicsHelper x={0} y={0} width={400} height={200} />
              <Text
                text={`title: ${mission.title}`}
                anchor={0}
                x={80}
                y={20}
                style={{
                  wordWrap: true,
                  wordWrapWidth: 500,
                  fontSize: 20,
                  lineHeight: 30,
                }}
              />
              {/* todo: добавить возможность смещения текста в зависимости от высоты title */}
              <Text
                text={`type: ${mission.type}`}
                anchor={0}
                x={80}
                y={50}
                style={{
                  wordWrap: true,
                  wordWrapWidth: 180,
                  fontSize: 16,
                }}
              />
            </Container>
          </Modal>
        </Container>
      )}
    </GameScaleContext.Consumer>
  );
}
