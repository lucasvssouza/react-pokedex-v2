import { Global } from "./styles";
import { getPokedex } from "./services/api";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const Pokedex = async () => {
    const resultPokedex = await getPokedex();

    console.log(resultPokedex);
    try {
      const promises = resultPokedex.map((pokemon: any, key: number) => {
        return pokemon;
      });
      const data = await Promise.all(promises);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  Pokedex();

  return (
    <div>
      <Global />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
