import { Mission } from "./types";
import { createEvent, createStore } from "effector";
import { createMissions } from "../api/createMissions";

type Nullable<T> = null | T;

const MISSIONS = createMissions();

export const $missions = createStore<Mission[]>(MISSIONS);
export const showMission = createEvent<Mission>();
export const hideMission = createEvent();
export const $activeMission = createStore<Nullable<Mission>>(null)
  .on(showMission, (_, payload) => payload)
  .on(hideMission, () => null);
