import { MainListPK, EmptyList, PKSearch } from "../styles";
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

  const RenderList = (): any => {
    if (
      list.length === 0 &&
      search !== "" &&
      search !== undefined &&
      search !== null
    ) {
      return <EmptyList>Pokémon não encontrado...</EmptyList>;
    }
  };

  useEffect(() => {
    fillPokemon();
  }, []);

  useEffect(() => {
    fillPokemon();
  }, [search]);

  return (
    <div>
      <div>
        <PKSearch
          type="text"
          value={search}
          placeholder="Digite o nome do Pokémon..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <MainListPK>
        {list &&
          list.map((pokemon: unknown, key: unknown) => {
            return <PokemonCard pk={pokemon} key={key} />;
          })}
        <RenderList />
      </MainListPK>
    </div>
  );
};

export default ListPokemons;
