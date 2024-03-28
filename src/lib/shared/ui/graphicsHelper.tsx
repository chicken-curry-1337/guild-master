import { Graphics } from "@pixi/react";
import { useCallback } from "react";

export function GraphicsHelper({
  x,
  y,
  width,
  height,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
}) {
  const draw = useCallback((g) => {
    g.clear();
    g.lineStyle(2, 0x0000ff, 1);
    g.beginFill(0xff700b, 1);
    g.drawRect(x, y, width, height);
    g.endFill();
  }, []);

  return <Graphics draw={draw} />;
}
