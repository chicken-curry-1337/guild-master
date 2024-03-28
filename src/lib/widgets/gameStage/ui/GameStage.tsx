import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useUnit } from "effector-react";
import { Container, Stage } from "@pixi/react";
import { GraphicsHelper } from "$lib/shared/ui/graphicsHelper";
import { MissionBoard } from "$lib/entities/missionBoard/view";
import { MissionCard } from "$lib/entities/missionBoard/view/missionCard";
import { $activeMission } from "$lib/entities/missionBoard/model";
import { GameScaleContext } from "$lib/entities/gameScale/model";

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
    return width / WIDTH;
  }, [width]);

  return (
    <GameScaleContext.Provider value={scale}>
      <StageContainer>
        <Stage
          width={width}
          height={height}
          options={{
            //   autoDensity: true,
            background: 0x1099bb,
            resizeTo: window,
          }}
          raf={false}
          renderOnComponentChange={true}
        >
          <Container width={WIDTH} height={HEIGHT} scale={scale} anchor={0.5}>
            <GraphicsHelper width={WIDTH} height={HEIGHT} />
            <MissionBoard scale={scale} position={[WIDTH / 2, HEIGHT / 2]} />
            {activeMission !== null && <MissionCard mission={activeMission} />}
          </Container>
        </Stage>
      </StageContainer>
    </GameScaleContext.Provider>
  );
}

export default GameStage;
