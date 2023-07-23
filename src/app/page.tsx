import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Pokédex</h1>
        <p className="small-text">
          Search for a Pokémon by name or using its national pokedex number.
        </p>
        <div className="search">
          <form>
            <div className="name-input-box small-text" placeholder="Enter pokémon name">
              <input type="text" spellcheck="false"/>
            </div>
            <button type="submit" className="primary">
              <FaSearch />
            </button>
          </form>
        </div>
      </header>
    </main>
  );
}
