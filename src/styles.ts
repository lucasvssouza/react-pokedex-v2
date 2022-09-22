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

/* Styles PokemonDetailedCard.tsx */
export const PKD = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PKD_Close = styled.button`
  margin-top: 20px;
  left: 30px;
  width: 30px;
  height: 30px;
  background-color: black;
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;

export const PKD_Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  display: flex;
  justify-content: center;
  margin-top: 30px;

  text-align: center;
  font-size: 20px;
`;

export const PKD_CTR_Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PKD_CTR_Top = styled.div`
  margin-bottom: 50px;
  padding: 0px 10px 0px 10px;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;

  background: linear-gradient(
    128deg,
    rgba(255, 119, 65, 1) 40%,
    rgba(15, 7, 4, 1) 40%
  );
`;

export const PKD_CTRT_L = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PKD_CTR_Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PKD_Name = styled.div`
  color: white;
`;

export const PKD_ID = styled.div`
  color: black;
`;

export const PKD_Image_Main = styled.img`
  width: 200px;
  margin-right: 50px;
`;

export const PKD_Image_Sub = styled.img`
  width: 50px;
  margin-right: 5px;
`;

export const PKD_Pokeball = styled.img`
  width: 30px;
`;

/* Styled Detailed Ability && Type */
export const PKD_CTR_Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #757575;

  font-weight: bold;
  color: black;
`;
export const PKD_Info_Title = styled.div`
  width: 150px;
`;
export const PKD_CTR_Value = styled.div`
  display: flex;
  flex-direction: row;
  width: 330px;
  background-color: #ababab;
`;
export const PKD_Value = styled.div`
  margin: 5px 0px 5px 20px;
  width: 85px;
  display: flex;
  align-items: center;
`;
/* Styled Detailed Ability && Type */

/* Styled Detailed Stats */
export const PKD_CTR_Stats = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);

  color: white;
`;
export const PKD_Stats = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  border-top: 3px solid white;
  background: linear-gradient(
    128deg,
    rgba(171, 171, 171, 1) 0%,
    rgba(117, 117, 117, 1) 50%
  );
`;
export const PKD_Stats_Name = styled.div`
  margin: 5px 0px 5px 0px;
  width: 200px;
`;
export const PKD_Stats_Value = styled.div`
  margin: 5px 0px 5px 0px;
  width: 200px;
`;
/* Styled Detailed Stats */
/* Styles PokemonDetailedCard.tsx */
