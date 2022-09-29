import { PokedexContext } from "../contexts/PokedexContext";
import pokeball from "../image/pokeball-white.png";
import black_pokeball from "../image/pokeball-black.png";
import { useContext } from "react";
import {
  PKDetails,
  PKDContainer,
  PKDCardTop,
  PKDCardLTop,
  PKDCardRTop,
  PKDCardBottom,
  PKDText,
  PKDCard,
  PKDImage,
  PKDPokeball,
  PKDTypeContainer,
  PKDTypeTitle,
  PKDTypeName,
  PKDTypeValue,
  PKDStatsContainer,
  PKDStats,
  PKDStatsValue,
  PKDStatsName,
  PKDClose,
} from "../styles";

const DetailPokemon = () => {
  const [pkList, detail, pkDetail, openDetails, closeDetails] =
    useContext(PokedexContext);

  return (
    <PKDetails key={pkDetail.national_number}>
      <PKDContainer>
        <PKDImage src={pkDetail.sprites.large} />
        <PKDCard>
          <PKDCardTop>
            <PKDCardLTop>
              <PKDPokeball src={pokeball} />
              <PKDText>{pkDetail.national_number}</PKDText>
            </PKDCardLTop>
            <PKDCardRTop>
              <PKDText>{pkDetail.name}</PKDText>
            </PKDCardRTop>
          </PKDCardTop>
          <PKDCardBottom>
            <PKDTypeContainer>
              <PKDTypeTitle>Type</PKDTypeTitle>
              <PKDTypeName>
                {pkDetail.type.map((type: any, key: any) => {
                  return <PKDTypeValue>{type}</PKDTypeValue>;
                })}
              </PKDTypeName>
            </PKDTypeContainer>
            <PKDStatsContainer>
              <PKDStats>
                <PKDStatsName>HP</PKDStatsName>
                <PKDStatsValue>{pkDetail.hp}</PKDStatsValue>
              </PKDStats>
              <PKDStats>
                <PKDStatsName>ATK</PKDStatsName>
                <PKDStatsValue>{pkDetail.attack}</PKDStatsValue>
              </PKDStats>
              <PKDStats>
                <PKDStatsName>DEF</PKDStatsName>
                <PKDStatsValue>{pkDetail.defense}</PKDStatsValue>
              </PKDStats>
              <PKDStats>
                <PKDStatsName>SP ATK</PKDStatsName>
                <PKDStatsValue>{pkDetail.sp_atk}</PKDStatsValue>
              </PKDStats>
              <PKDStats>
                <PKDStatsName>SP DEF</PKDStatsName>
                <PKDStatsValue>{pkDetail.sp_def}</PKDStatsValue>
              </PKDStats>
              <PKDStats>
                <PKDStatsName>SPD</PKDStatsName>
                <PKDStatsValue>{pkDetail.speed}</PKDStatsValue>
              </PKDStats>
            </PKDStatsContainer>
          </PKDCardBottom>
        </PKDCard>
      </PKDContainer>
      <PKDClose onClick={closeDetails}>X</PKDClose>
    </PKDetails>
  );
};

export default DetailPokemon;
