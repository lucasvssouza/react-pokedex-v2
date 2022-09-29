import { MainListPK, PKSearch } from "../styles";
import { useContext, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { useState } from "react";
import { PokedexContext } from "../contexts/PokedexContext";

const ListPokemons = () => {
  const [pkList] = useContext(PokedexContext);
  const [search, setSearch] = useState<string>();
  const [list, setList] = useState([]);

  const fillPokemon = () => {
    if (search === "" || search === undefined || search === null) {
      setList(pkList);
    } else {
      setList(
        pkList.filter((p: any) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    fillPokemon();
  });

  return (
    <div>
      <div>
        <PKSearch
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <MainListPK>
        {list &&
          list.map((pokemon: unknown, key: unknown) => {
            return <PokemonCard pk={pokemon} key={key} />;
          })}
      </MainListPK>
    </div>
  );
};

export default ListPokemons;
