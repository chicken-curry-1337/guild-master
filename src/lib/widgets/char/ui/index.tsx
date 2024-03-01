import { Char } from "$lib/entities/chars/model/types";
import { Container, Image, Name, Wrapper, CharClass } from "./style";

export function CharCard({ char }: { char: Char }) {
  const { name, img, charClass, hp, strength, agility } = char;
  return (
    <Container>
      <Wrapper>
        <Image src={img} />
        <div>
          <Name>{name}</Name>
          <CharClass>{charClass}</CharClass>
        </div>
      </Wrapper>
      <ul>
        <li>hp: {hp}</li>
        <li>strength: {strength}</li>
        <li>agility: {agility}</li>
      </ul>
    </Container>
  );
}
