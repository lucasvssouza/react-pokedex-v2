import { Global } from "./styles";
import { getPokedex } from "./services/api";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import {PokedexContext} from "./contexts/PokedexContext";
import { useEffect, useState } from "react";

function App() {
  const [pkList, setPKList] = useState<undefined|any>()
  const Pokedex = async () => {
    const resultPokedex = await getPokedex();
    try {
      const promises = resultPokedex.map((pokemon: any, key: number) => {
        return pokemon;
      });
      const data = await Promise.all(promises);
      setPKList(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    Pokedex();
  },[])
  

  return (
    <PokedexContext.Provider value={pkList}>
      <Global />
      <Navbar />
      <Main />
    </PokedexContext.Provider>
  );
}

export default App;
