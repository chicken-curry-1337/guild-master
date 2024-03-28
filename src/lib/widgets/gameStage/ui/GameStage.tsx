import { Container, Stage } from "@pixi/react";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { GraphicsHelper } from "../../../shared/ui/graphicsHelper";
import { MissionBoard } from "$lib/entities/missionBoard/view";
import { MissionCard } from "$lib/entities/missionBoard/view/missionCard";
import { useUnit } from "effector-react";
import { $activeMission } from "$lib/entities/missionBoard/model";

const StageContainer = styled.div`
  position: relative;
  z-index: 20;
  width: 100vw;
  height: 100vh;
`;

// todo: set graphic settings resize (?)
const WIDTH = 1920;
const HEIGHT = 1080;

export function GameStage() {
  const activeMission = useUnit($activeMission);
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

  const scale = useMemo(() => {
    return width > height ? width / WIDTH : height / HEIGHT;
  }, [width, height]);

  return (
    <StageContainer>
      <Stage
        width={width}
        height={height}
        options={{
          autoDensity: true,
          width: WIDTH * scale,
          height: HEIGHT * scale,
          background: 0x1099bb,
          resizeTo: window,
        }}
        raf={false}
        renderOnComponentChange={true}
      >
        <Container>
          {/* <GraphicsHelper
            x={0}
            y={0}
            width={WIDTH}
            height={HEIGHT}
            scale={scale}
          /> */}
          <MissionBoard scale={scale} />
          {activeMission !== null && (
            <MissionCard mission={activeMission} scale={scale} />
          )}
        </Container>
      </Stage>
    </StageContainer>
  );
}

export default GameStage;
