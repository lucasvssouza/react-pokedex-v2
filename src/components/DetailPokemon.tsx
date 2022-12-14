import { PokedexContext } from "../contexts/PokedexContext";
import pokeball from "../image/pokeball-white.png";
import pokeball_black from "../image/pokeball-black.png"
import { useContext } from "react";
import {
  PKDetails,
  PKDCardTop,
  PKDCardLTop,
  PKDCardRTop,
  PKDCardMiddle,
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

    const imageOnErrorHandler = (
      event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
      event.currentTarget.src =
      pokeball_black;
    };

  return (
    <PKDetails key={pkDetail.national_number}>
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
        <PKDCardMiddle>
          <PKDImage src={pkDetail.sprites.large} onError={imageOnErrorHandler} />
        </PKDCardMiddle>
        <PKDCardBottom>
          <PKDTypeContainer>
            <PKDTypeTitle>Type</PKDTypeTitle>
            <PKDTypeName>
              {pkDetail.type.map((type: any, key: any) => {
                return <PKDTypeValue className={type}>{type}</PKDTypeValue>;
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

      <PKDClose onClick={closeDetails}>X</PKDClose>
    </PKDetails>
  );
};

export default DetailPokemon;
