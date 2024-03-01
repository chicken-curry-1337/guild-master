import styled from "styled-components";

export const Container = styled.article`
  padding: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: black;
  margin-right: 20px;
  object-fit: contain;
  display: block;
`;

export const Name = styled.h1`
  font-size: 22px;
  line-height: 26px;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

export const CharClass = styled.h2`
  font-size: 18px;
  line-height: 22px;
  margin: 0;
  padding: 0;
`;
