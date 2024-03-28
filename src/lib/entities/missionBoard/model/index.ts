import { Mission } from "./types";
import { createEvent, createStore } from "effector";
import { faker } from "@faker-js/faker";

export enum MissionPositionType {
  angel = "ANGEL",
  demon = "DEMON",
  neutral = "NEUTRAL",
}

// todo: определить количество тиков за сутки. Решить проблему с увеличением тиков
function createMissions(currentTick = 0) {
  const missions = [];
  const title = "mission title mission title mission title";
  for (let i = 0; i < 20; i++) {
    missions[i] = {
      title: title.slice(0, title.length - i),
      id: i,
      type: faker.helpers.enumValue(MissionPositionType),
      ticks: faker.number.int({
        min: currentTick,
        max: currentTick + 30, // todo: уменьшать количество тиков раз в сутки ? Может, лучше высчитывать сложность задачи и уменьшать сложность каждый день? (сложность -= (сложенные способности задействованных в миссии персонажей))
      }),
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
