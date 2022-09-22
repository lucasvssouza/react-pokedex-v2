import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    position: relative;
    user-select: none;
  };

  html{
    height: 100vh;
    width: 100vw;
    background: rgb(255,255,255);
    background: linear-gradient(128deg, rgba(255,255,255,1) 38.75%, rgba(255,96,54,1) 38.75%, rgba(255,96,54,1) 55%, rgba(255,118,65,1) 55%, rgba(255,124,68,1) 100%);
  }
`;

export const ImageBackgroud = styled.img`
  height: calc(((65vh+65vw) / 2));
  position: absolute;
  top: 35%;
  transform: rotate(320deg);
  right: 20%;
`;

export const MainNavbar = styled.div`
  margin-top: 3vh;
  height: 10vh;
  width: 100%;

  display: flex;
  align-items: center;

  background: rgb(199, 199, 199);
  background: linear-gradient(
    128deg,
    rgba(199, 199, 199, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const NB_H1 = styled.h1`
  margin-left: 20px;
`;

export const NB_IMG = styled.img`
  height: 30px;
  margin-right: 10px;
`;

export const NB_P = styled.p`
  font-size: 28px;
  color: white;
`;

export const NB_PKNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  background: #7e7c7c;
  margin-left: 20px;
  border-radius: 10px;
  height 40px;
  width: 120px;
`;