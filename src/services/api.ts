export const getPokedex = async () => {
  try {
    const response = await fetch(
      `https://unpkg.com/pokemons@1.1.0/pokemons.json`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
