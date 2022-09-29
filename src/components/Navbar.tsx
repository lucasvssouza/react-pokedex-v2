import { NavbarContainer, NBNumber } from "../styles";
import pokeball from "../image/pokeball.png";

const Navbar = (props: any) => {
  const { pkCounter } = props;

  return (
    <NavbarContainer>
      <h1>Pokédex</h1>
      <NBNumber>
        <img src={pokeball} />
        <p>{pkCounter}</p>
      </NBNumber>
    </NavbarContainer>
  );
};

export default Navbar;
