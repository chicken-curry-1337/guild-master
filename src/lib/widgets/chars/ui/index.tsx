import { useList } from "effector-react";
import { $chars } from "$lib/entities/chars/model";
import { MainModal } from "$lib/pages/game/ui/styles";
import { CharCard } from "../../char";
import { Link } from "react-router-dom";

export function Chars() {
  const chars = useList($chars, (char) => <CharCard char={char} />);
  return (
    <MainModal>
      <Link to="/game">back</Link>
      <h3>Char list</h3>
      <div>{chars}</div>
    </MainModal>
  );
}
