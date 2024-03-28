import { Rectangle } from "pixi.js";
import { Graphics, Container, Text } from "@pixi/react";
import { useUnit } from "effector-react";
import { GraphicsHelper } from "$lib/shared/ui/graphicsHelper";
import { hideMission } from "../model";
import { Mission } from "../model/types";
import { useEffect, useState } from "react";
import { ResizeContext } from "../../../widgets/gameStage/ui/GameStage";

export function Modal({
  onOutsideClick,
  children,
}: {
  children?: any;
  onOutsideClick?(): void;
}) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function onResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", onResize);

    () => window.removeEventListener("resize", onResize);
  }, []);
  return (
    <>
      <ResizeContext.Consumer>
        {(scale) => (
          <Graphics
            eventMode={"static"}
            width={width * scale}
            height={height * scale}
            anchor={0}
            hitArea={new Rectangle(0, 0, 1920, 1080)}
            onclick={(e) => {
              e.stopPropagation();
              if (onOutsideClick) onOutsideClick();
            }}
            zIndex={1}
          />
        )}
      </ResizeContext.Consumer>
      {children}
    </>
  );
}

export function MissionCard({ mission }: { mission: Mission }) {
  const hideMissionCard = useUnit(hideMission);
  return (
    <ResizeContext.Consumer>
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
    </ResizeContext.Consumer>
  );
}
