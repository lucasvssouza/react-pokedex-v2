import { Main_ListPK } from "../styles";
import { useContext } from "react";
import PokemonCard from "./PokemonCard"

import { PokedexContext } from "../contexts/PokedexContext";

const ListPokemons = () => {
    const pokemon = useContext(PokedexContext)

    console.log(pokemon)

    return (
        <Main_ListPK>
            {pokemon && pokemon.map((pokemon:any, key:number)=>{
              return <PokemonCard pk={pokemon}/>
            })}
        </Main_ListPK>
    );
};

export default ListPokemons;