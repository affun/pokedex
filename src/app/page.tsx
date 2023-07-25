"use client";
import Card from "@/components/Card";
import { FaSearch } from "react-icons/fa";

import data from "../assets/data.json";
import { useState } from "react";

export default function Home() {
  const pokedex = data;
  const [pokePut, setPokePut] = useState("");
  console.log(pokedex[0]);

  const handlePokePut = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setPokePut(e.currentTarget.value);
  };

  return (
    <main>
      <header>
        <h1>Pokédex</h1>
        <p className="small-text">
          Search for a Pokémon by name or using its national pokedex number.
        </p>
        <div className="search">
          <form>
            <div className="name-input-box small-text">
              <input
                type="text"
                spellcheck="false"
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
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
          <Card pname={pokedex[0].name} pid={pokedex[0].id} pimg={pokedex[0].ThumbnailImage} />
        </div>
      </div>
    </main>
  );
}
