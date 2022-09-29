import {
  PKCard,
  PKCID,
  PKCName,
  PKCIMG,
  PKCTypeContainer,
  PKCType,
} from "../styles";
import "../types.css";
import { useContext } from "react";
import { PokedexContext } from "../contexts/PokedexContext";

const PokemonCard = (props: any) => {
  const { pk, key } = props;
  const [pkList, detail, pkDetail, openDetails] = useContext(PokedexContext);

  const IMAGE = pk.sprites.large;

  // This function is triggered if an error occurs while loading an image
  const imageOnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src =
      "https://developers.google.com/static/maps/documentation/streetview/images/error-image-generic.png";
  };

  const detailCard = () => {
    console.log(pk);
    openDetails(pk);
  };

  return (
    <PKCard key={key} onClick={detailCard}>
      <PKCIMG src={IMAGE} onError={imageOnErrorHandler} />
      <PKCID>{pk.national_number}</PKCID>
      <PKCName>{pk.name}</PKCName>
      <PKCTypeContainer>
        {pk.type.map((type: string) => {
          return <PKCType className={type}>{type}</PKCType>;
        })}
      </PKCTypeContainer>
    </PKCard>
  );
};

export default PokemonCard;
