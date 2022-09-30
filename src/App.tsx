import { Global } from "./styles";
import { getPokedex } from "./services/api";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { PokedexContext } from "./contexts/PokedexContext";
import { useEffect, useState } from "react";

function App() {
  const [pkList, setPKList] = useState<Array<unknown>>([]);
  const [detail, setDetails] = useState<boolean>(false);
  const [pkDetail, setPKDetail] = useState<Array<unknown>>([]);
  const [pkCounter, setPKCount] = useState<number>();
  
  const pokedex = async () => {
    const resultPokedex = await getPokedex();
    setPKCount(resultPokedex.length);
    try {
      const promises = resultPokedex.map((pokemon: Array<unknown>) => {
        return pokemon;
      });
      const data = await Promise.all(promises);
      setPKList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const openDetails = (pdata: Array<unknown>) => {
    setPKDetail(pdata);
    setDetails(true);
  };

  const closeDetails = () => {
    setPKDetail([]);
    setDetails(false);
  };

  useEffect(() => {
    pokedex();
  }, []);

  return (
    <PokedexContext.Provider
      value={[pkList, detail, pkDetail, openDetails, closeDetails]}
    >
      <Global />
      <Navbar pkCounter={pkCounter} />
      <Main />
      <Footer />
    </PokedexContext.Provider>
  );
}

export default App;
