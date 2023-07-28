"use client";
import Card from "@/components/Card";
import { FaSearch } from "react-icons/fa";

import data from "../assets/data.json";
import { useState } from "react";

interface IPokedata {
  name: string;
  id: number;
  ThumbnailImage: string;
}


export default function Home() {
  const pokedex = data;
  const [pokePut, setPokePut] = useState("");
  // console.log(pokedex[0]);

  const handlePokePut = (e: React.FormEvent<HTMLInputElement>) => {
    setPokePut(e.currentTarget.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pokePut !== "") {
      let result = data.filter((pmon) => pmon.id == Number(pokePut));
      if (result.length === 0) {
        result = data.filter((pmon) => pmon.slug == pokePut.toLowerCase());
      }
      // const result = pokedex.filter((pmon) => pmon.id == Number(pokePut));
      // if (result.length == 0) {
      //   console.log("yay");
      //   spid = [
      //     [
      //       pokedex.filter((pmon) => {
      //         if (pmon.slug == pokePut) {
      //           return pmon;
      //         }
      //       }),
      //     ][0][0].id,
      //   ];
      // } else {
      //   spid = [result[0].id];
      // }
      if (result.length !== 0) {
        window.location.href = window.location.origin + "#" + result[0].id;
        setPokePut("");
      }
    }
  };

  return (
    <main>
      <header>
        <h1>Pokédex</h1>
        <p className="small-text">
          Search for a Pokémon by name or using its national pokedex number.
        </p>
        <div className="search">
          <form onSubmit={handleSearch}>
            <div className="name-input-box small-text">
              <input
                type="text"
                spellCheck="false"
                value={pokePut}
                onChange={handlePokePut}
                placeholder="Enter pokémon name"
              />
            </div>
            <button type="submit" className="primary">
              <FaSearch />
            </button>
          </form>
        </div>
      </header>
      <div className="dex-container">
        <div className="dex">
          {pokedex.map((pokemon: IPokedata) => {
            return <Card pname={pokemon.name} pid={pokemon.id} pimg={pokemon.ThumbnailImage} />;
          })}
        </div>
      </div>
    </main>
  );
}
