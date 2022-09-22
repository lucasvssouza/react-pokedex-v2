import { MainNavbar, NB_H1, NB_PKNumber, NB_IMG, NB_P } from "../styles";
import pokeball from "../image/pokeball.png";

const Navbar = (props: any) => {
  const { pokemonNumber } = props;

  return (
    <MainNavbar>
      <NB_H1>Pokédex</NB_H1>
      <NB_PKNumber>
        <NB_IMG src={pokeball} />
        <NB_P>{pokemonNumber}</NB_P>
      </NB_PKNumber>
    </MainNavbar>
  );
};

export default Navbar;
