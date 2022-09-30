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
  }
`;

export const NavbarContainer = styled.nav`
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
  h1 {
    margin-left: 20px;
  } 
  p {
    font-size: 30px;
    color: white;
  }
  img {
    height: 30px;
    margin-right: 10px;
  }
`;

export const NBNumber = styled.div`
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

export const MainApp = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  height: 74.2vh;
  width: 100%;
`;

export const MainListPK = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 0vh 1vw 3vh 1vw;
  width: 60vw;
  height: 68vh;
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
    background-clip: padding-box;
    border: 0.05em solid #eeeeee;
  }
  ::-webkit-scrollbar-track {
    background-color: #bbbbbb;
  }
  ::-webkit-scrollbar-button:single-button {
    background-color: #bbbbbb;
    display: block;
    border-style: solid;
    height: 13px;
    width: 16px;
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement {
    margin: 5px;
    padding: 5px;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #555555 transparent;
  }
  ::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
    border-color: transparent transparent #777777 transparent;
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    border-width: 8px 8px 0 8px;
    border-color: #555555 transparent transparent transparent;
  }
  ::-webkit-scrollbar-button:vertical:single-button:increment:hover {
    border-color: #777777 transparent transparent transparent;
  }
`;

export const EmptyList = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 5px;
  font-size: 20px;
  width: 57vw;
  background-color: #C6C6C6;
`;

export const PKCard = styled.div`
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  color: black;
  width: 200px;
  cursor: pointer;
`;

export const PKCID = styled.p`
  font-size: 24px;
  color: #7C7C7C;
`;

export const PKCName = styled.p`
  font-size: 28px;
  color: black;
`;

export const PKCIMG = styled.img`
  border: 10px solid lightgray;
  height: 150px;
  width: 150px;
`;

export const PKCTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
`;

export const PKCType = styled.div`
  display: flex;
  margin: 5px 10px 5px 0px;
  padding: 0px 12px 0px 12px;
  height: 40px;
  align-text: center;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
`;

export const PKSearch = styled.input`
  display: flex;
  margin: 5vh 1vw 2vh 1vw;
  padding: 5px;
  border-radius: 5px;
  width: 58.5vw;
`;

export const PKDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const PKDClose = styled.button`
  margin-top: 20px;
  left: 30px;
  width: 30px;
  height: 30px;
  background-color: black;
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;

export const PKDCard = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin-top: 30px;

  text-align: center;
  font-size: 20px;
`;

export const PKDText = styled.p`
  color: white;
`;

export const PKDCardTop = styled.div`
  padding: 0px 10px 0px 10px;
  display: flex;
  height: 40px;
  width: 320px;

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

export const PKDCardLTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PKDCardRTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PKDCardMiddle = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  width: 280px;

  border-left: 30px solid #757575;
  border-right: 30px solid #757575;

  text-align: center;
  font-size: 20px;
`;

export const PKDCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PKDImage = styled.img`
  width: 200px;
  display: flex;
  justify-content: center;
`;

export const PKDPokeball = styled.img`
  width: 30px;
  margin-right: 10px;
`;

/* Styled Detailed Ability && Type */
export const PKDTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #757575;

  font-weight: bold;
  color: black;
`;
export const PKDTypeTitle = styled.p`
  width: 120px;
`;

export const PKDTypeName = styled.p`
  display: flex;
  flex-direction: row;
  width: 220px;
  background-color: #C6C6C6;
`;
export const PKDTypeValue = styled.p`
  padding: 5px 10px 5px 10px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
/* Styled Detailed Ability && Type */

/* Styled Detailed Stats */
export const PKDStatsContainer = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);

  color: white;
`;
export const PKDStats = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  background: #757575;
`;
export const PKDStatsName = styled.div`
  margin: 5px 0 5px 0;
  width: 200px;
`;
export const PKDStatsValue = styled.div`
  margin: 5px 0 5px 0;
  width: 200px;
`;
/* Styled Detailed Stats */
/* Styles PokemonDetailedCard.tsx */
export const FooterContainer = styled.footer`
  background-color: #C6C6C6;
  border-top: 2px solid #7C7C7C;
  height: 8vh;
  color: black;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 0.5vh 0 0.5vh 0;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  margin-top: 20px;
  width: 100%;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContactItem = styled.img`
  padding-right: 5px;
  padding-left: 5px;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
