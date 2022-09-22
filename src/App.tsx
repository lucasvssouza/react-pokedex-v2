import { getPokedex } from "./services/api";
import Navbar from "./components/Navbar";

function App() {
  const Pokedex = async () => {
    const resultPokedex = await getPokedex();
    
    console.log(resultPokedex)
    try{
      const promises = resultPokedex.map((pokemon: any, key: number) =>{
        return pokemon
      })
      const data = await Promise.all(promises)
      console.log(data);
    }catch(error){
      console.log(error)
    }

  };

  Pokedex();

  return (
   <div><Navbar></Navbar></div>
  );
}

export default App;
