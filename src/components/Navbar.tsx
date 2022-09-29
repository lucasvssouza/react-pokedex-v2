import { MainNavbar, NB_PKNumber } from "../styles";
import pokeball from "../image/pokeball.png";

const Navbar = (props: any) => {
  const { pokemonNumber } = props;

  return (
    <MainNavbar>
      <h1>Pokédex</h1>
      <NB_PKNumber>
        <img src={pokeball} />
        <p>{pokemonNumber}</p>
      </NB_PKNumber>
    </MainNavbar>
  );
};

export default Navbar;
