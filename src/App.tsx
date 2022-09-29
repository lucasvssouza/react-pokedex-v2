import { Global } from "./styles";
import { getPokedex } from "./services/api";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { PokedexContext } from "./contexts/PokedexContext";
import { useEffect, useState } from "react";

function App() {
  const [pkList, setPKList] = useState<Array<unknown>>();
  const [detail, setDetails] = useState<boolean>(false);
  const [pkDetail, setPKDetail] = useState<Array<unknown>>([])

  const localData = JSON.parse(localStorage.getItem("pk2")!);

  const pokedex = async () => {
    const resultPokedex = await getPokedex();
    if (localData !== null && localData !== undefined) {
      if (localData.length === 917) {
        console.log("Data OK!");
        setPKList(localData);
      } else {
        try {
          console.log("Data Off!");
          const promises = resultPokedex.map((pokemon: Array<unknown>) => {
            return pokemon;
          });
          const data = await Promise.all(promises);
          setPKList(data);
          localStorage.setItem("pk2", JSON.stringify(data));
          console.log("Data salvo no localStorage");
        } catch (error) {
          console.log(error);
        }
      }
    } else if (localData === null || localData === undefined) {
      try {
        console.log("Data Off!");
        const promises = resultPokedex.map((pokemon: Array<unknown>) => {
          return pokemon;
        });
        const data = await Promise.all(promises);
        setPKList(data);
        localStorage.setItem("pk2", JSON.stringify(data));
        console.log("Data salvo no localStorage");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const openDetails = (pdata: Array<unknown>) =>{
    setPKDetail(pdata);
    setDetails(true)
  }

  const closeDetails = () =>{
    setPKDetail([])
    setDetails(false)
  }

  useEffect(() => {
    pokedex();
  }, []);

  return (
    <PokedexContext.Provider value={[pkList,detail,pkDetail,openDetails,closeDetails]}>
      <Global />
      <Navbar />
      <Main />
    </PokedexContext.Provider>
  );
}

export default App;
