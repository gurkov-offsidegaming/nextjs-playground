import React from 'react'
import styles from './RandomPokemon.module.css'
import Image from 'next/image'
import { usePokemonsQuery } from '../../utils/queries'

export const RandomPokemon = () => {
  const pokemons = usePokemonsQuery()
  const pokemon = Object.values(pokemons)[Math.floor(Math.random() * 100) + 1]

  return (
    <div className={styles.card}>
      <h1>Random pokemon of the day!</h1>
      <Image
        className={styles.picture}
        alt={pokemon.name}
        src={`/${pokemon.image}`}
        height={200}
        width={200}
        placeholder={'blur'}
        blurDataURL={'/placeholder.png'}
      />
      <div className={styles.name}>{pokemon.name}</div>
    </div>
  )
}
