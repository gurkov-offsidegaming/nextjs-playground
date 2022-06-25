import axios from 'axios'
import { useQuery } from 'react-query'

interface Pokemon {
    id: number;
    name: string;
    image: string;
}

export const getPokemons = (): Promise<Pokemon[]> =>
  axios.get('http://localhost:3000/pokemons.json').then(response => response.data)

export const usePokemonsQuery = () => {
  const { data: pokemons } = useQuery('pokemons', getPokemons, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
  })
  return pokemons
}
