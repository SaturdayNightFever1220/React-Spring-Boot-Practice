import { useState, useEffect } from "react";

type Pokemon = {
  name: string;
  image: string;
};

type PokemonName = {
  language: {
    name: string;
  };
  name: string;
};

function RandomPokemon() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/hitmonlee")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.sprites.front_default,);
      })
      .catch((err) => console.error(err));
  }, []);

  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 1025) + 1;

    // ポケモン情報
    const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data1 = await res1.json();

    // 日本語名取得
    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomId}`);
    const data2 = await res2.json();
    const japaneseName =
      data2.names.find((n: PokemonName) => n.language.name === "ja")?.name ||
      data1.name;

    setPokemon({
      name: japaneseName,
      image: data1.sprites.other["official-artwork"].front_default,
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2 style={{
        fontSize: "35px"
      }}>
        {imageUrl ? (
          <img src={imageUrl} alt="サワムラー" width={70} />
        ) : (
          <p>読み込み中...</p>
        )}

        ランダムポケモンガチャ

        {imageUrl ? (
          <img src={imageUrl} alt="サワムラー" width={70} />
        ) : (
          <p>読み込み中...</p>
        )}
      </h2>

      <button onClick={fetchRandomPokemon}>ポケモンを引く！</button>

      {pokemon && (
        <div style={{ marginTop: "20px" }}>
          <h3>{pokemon.name}</h3>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      )}
    </div>
  );
}

export default RandomPokemon;