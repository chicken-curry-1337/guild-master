import { Graphics } from "@pixi/react";
import { useCallback } from "react";

export function GraphicsHelper({
  width,
  height,
  x = 0,
  y = 0,
  fill = 0xff700b,
  line = 0x0000ff,
  scale = 1,
  anchor = 0.5,
}: {
  x?: number;
  y?: number;
  width: number;
  height: number;
  fill?: number;
  line?: number;
  scale?: number;
  anchor?: number;
}) {
  const draw = useCallback((g) => {
    g.clear();
    g.lineStyle(2, line, 1);
    g.beginFill(fill, 1);
    g.drawRect(x, y, width, height);
    g.endFill();
  }, []);

  return <Graphics anchor={anchor} x={x} y={y} draw={draw} scale={scale} />;
}
