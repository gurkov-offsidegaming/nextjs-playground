import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Details.module.css'
import axios from 'axios'
import Image from 'next/image'

export async function getStaticPaths() {
  const { data: pokemons } = await axios.get('http://localhost:3000/pokemons.json')

  const paths = pokemons.map(pokemon => ({
    params: { id: pokemon.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {

  const { data: pokemon } = await axios.get(`http://localhost:3000/pokemon/${params.id}.json`)
  const { data: { blend_name: coffeeName } } = await axios.get('https://random-data-api.com/api/coffee/random_coffee')

  return {
    props: {
      pokemon,
      coffeeName,
    },
    revalidate: 30,
  }
}

export default function Details({ pokemon, coffeeName }) {
  return (
    <div>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <div>
        <Link href="/" className={styles.link}>
          <a>Back to Home</a>
        </Link>
      </div>
      <div className={styles.layout}>
        <Image
          className={styles.picture}
          alt={pokemon.name.english}
          src={`/${pokemon.image}`}
          height={200}
          width={200}
          placeholder={'blur'}
          blurDataURL={'/placeholder.png'}
        />
        <div>
          <div className={styles.name}>{pokemon.name}</div>
          <div className={styles.type}>{pokemon.type.join(', ')}</div>
          <table>
            <thead className={styles.header}>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map(({ name, value }) => (
                <tr key={name}>
                  <td className={styles.attribute}>{name}</td>
                  <td>{value}</td>
                </tr>
              ))}
              <tr>
                <td className={styles.attribute}>Fav coffee name: </td>
                <td>{coffeeName}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
