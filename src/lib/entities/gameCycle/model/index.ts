import { createDomain } from "effector";
import { interval } from "patronum";

export const gameCycleDomain = createDomain();
export const timeout = gameCycleDomain.createStore<number>(1000);
export const start = gameCycleDomain.createEvent();
export const stop = gameCycleDomain.createEvent();

export const { tick, isRunning } = interval({
  timeout,
  start,
  stop,
});
