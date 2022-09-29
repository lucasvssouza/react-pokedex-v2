import { MainApp } from "../styles";
import { useContext } from "react";
import { PokedexContext } from "../contexts/PokedexContext";

import DetailPokemon from "./DetailPokemon";
import ListPokemons from "./ListPokemons";

const Main = () => {
  const [pkList,detail] = useContext(PokedexContext);

  const RenderMain = () => {
    if (detail === false) {
      return <ListPokemons />;
    } else {
      return <DetailPokemon />;
    }
  };

  return (
    <MainApp>
      <RenderMain />
    </MainApp>
  );
};

export default Main;
