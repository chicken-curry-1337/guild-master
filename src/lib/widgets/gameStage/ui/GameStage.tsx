import { Stage } from "@pixi/react";
import styled from "styled-components";

const StageContainer = styled.div`
  position: relative;
  z-index: 20;
  width: 100vw;
  height: 100vh;
`;

export function GameStage({ width = 800, height = 600, children }) {
  return (
    <StageContainer>
      <Stage
        x={0}
        y={0}
        width={width}
        height={height}
        options={{ background: 0x1099bb }}
      >
        {children}
      </Stage>
    </StageContainer>
  );
}

export default GameStage;
