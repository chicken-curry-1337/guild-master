import { Rectangle } from "pixi.js";
import { Graphics } from "@pixi/react";
import { useEffect, useState } from "react";
import { GameScaleContext } from "../model";

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
      <GameScaleContext.Consumer>
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
      </GameScaleContext.Consumer>
      {children}
    </>
  );
}
