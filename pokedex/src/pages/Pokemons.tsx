import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import BulbasaurPic from "../assets/bulbasaur.gif";
import styles from "./pokemons.module.css";

const Pokemons = () => {
  const [query, setQuery] = useState("");
  return (
    <>
    <Header query={query} setQuery={setQuery}/>
      <main>
        <nav>
          <Link className={styles.listItems} to="/">
            <img className={styles.listItemsIcon} src={BulbasaurPic} alt="Bulbasaur" />
            <div className={styles.listItemsText}>
              <span>Bulbasaur</span>
              <span>001</span>
            </div>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  )
}

export default Pokemons