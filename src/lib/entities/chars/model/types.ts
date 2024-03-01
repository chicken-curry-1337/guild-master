export type CharClass = "barbarian" | "rogue"; // todo: add more classes
export type ImgUrl = string;
export type CharId = number;
// todo: add more points to each new unit class
export type Char = {
  id: CharId;
  name: string;
  img: ImgUrl;
  charClass: CharClass;
  hp: number;
  strength: number;
  agility: number;
};
