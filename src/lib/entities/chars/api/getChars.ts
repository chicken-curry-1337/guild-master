import { Char } from "../model/types";
import DEFAULT_CHARS from "./defaultChars.json";

// todo: need to check chars
export function getChars(): Char[] {
  return DEFAULT_CHARS as Char[];
}
