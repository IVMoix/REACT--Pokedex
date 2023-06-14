import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'

import PokemonPic from "../assets/pikachu.png"
import ItemPic from "../assets/pokeball.png"
import LocationPic from "../assets/pointer.png"


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Link className={styles.footerLink} to="/pokemons">
            <img className={styles.footerIcon} src={PokemonPic} alt='Pokeball' />
            Pokemon
        </Link>
        <Link onClick={(event) => event.preventDefault()} className={styles.footerLink} to="/items">
            <img className={styles.footerIcon} src={ItemPic} alt='Items' />
            Items
        </Link>
        <Link onClick={(event) => event.preventDefault()} className={styles.footerLink} to="/location">
            <img className={styles.footerIcon} src={LocationPic} alt='Location' />
            Map
        </Link>
    </footer>
  )
}

export default Footer