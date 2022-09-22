import { MainNavbar, PokemonNumber } from "../styles";
import pokeball from "../image/pokeball.png";

const Navbar = (props: any) => {
  const { pokemonNumber } = props;

  return (
    <MainNavbar>
      <h1>Pokédex</h1>
      <PokemonNumber>
        <img src={pokeball}></img>
        <p>{pokemonNumber}</p>
      </PokemonNumber>
    </MainNavbar>
  );
};

export default Navbar;
