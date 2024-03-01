import styled from "styled-components";

export const GameScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d7d3d8;
`;

export const SideMenu = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  bottom: 30px;
  width: 400px;
  z-index: 2;
  background-color: #f4eeff;
  border-radius: 5px;
`;

export const MainModal = styled.div`
  position: fixed;
  top: 80px;
  bottom: 80px;
  left: 80px;
  right: 540px;
  z-index: 2;
  border-radius: 5px;
  background-color: #f4eeff;
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  margin-left: -200px;
  margin-top: -200px;
  background-color: #f4eeff;
  height: 400px;
  z-index: 100;
`;

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const PlaceholderbackgroundImage = styled.img`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
