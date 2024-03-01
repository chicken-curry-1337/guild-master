import { createDomain } from "effector";
import { Char, CharId } from "./types";

// todo: we need to create random characters
export const charsDomain = createDomain("unitsDomain");

export const $chars = charsDomain.createStore<Char[]>([
  {
    id: 1,
    name: "Berbar",
    img: "#",
    charClass: "barbarian",
    hp: 1,
    strength: 1,
    agility: 1,
  },
]);

export const $charMap = $chars.map<Record<CharId, Char>>((chars) =>
  chars.reduce((accum, char) => {
    accum[char.id] = { ...char };
    return accum;
  }, Object.assign({}))
);
