import { Mission } from "./types";
import { createEvent, createStore } from "effector";
import { faker } from "@faker-js/faker";

export enum MissionPositionType {
  angel = "ANGEL",
  demon = "DEMON",
  neutral = "NEUTRAL",
}

function createMissions() {
  const missions = [];
  const title = "mission title mission title mission title";
  for (let i = 0; i < 20; i++) {
    missions[i] = {
      title: title.slice(0, title.length - i),
      id: i,
      type: faker.helpers.enumValue(MissionPositionType),
    };
  }

  return missions;
}

type Nullable<T> = null | T;

const MISSIONS = createMissions();

export const $missions = createStore<Mission[]>(MISSIONS);
export const showMission = createEvent<Mission>();
export const hideMission = createEvent();
export const $activeMission = createStore<Nullable<Mission>>(null)
  .on(showMission, (_, payload) => payload)
  .on(hideMission, () => null);

$activeMission.watch(($activeMission) => {
  console.log({ $activeMission });
});
