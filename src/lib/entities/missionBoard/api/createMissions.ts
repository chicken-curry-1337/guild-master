import { faker } from "@faker-js/faker";
import { MissionPositionType } from "../model/enums";

// todo: определить количество тиков за сутки. Решить проблему с увеличением тиков
export function createMissions(currentTick = 0) {
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
