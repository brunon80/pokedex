import { makeAutoObservable, action } from 'mobx'

const LIMIT = 10
let currentOffset = 0

class PkmStore {
  pokemons = []
  pokemonDetail = {}
  isFetching = false
  
  async fetchPokemons(offset = 0) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`)
    const pkmJson = await response.json()
    let pkms = pkmJson.results.map(async (pkm) => {
      const pkmDetail = await this.getPokemonDetail(pkm.name)
      pkm.image = pkmDetail.sprites.front_default
      return pkm
    })
    pkms = await Promise.all(pkms)
    return pkms
  }

  async getPokemonDetail(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const detail = await response.json()
    return detail
  }

  setFecthingPokemon = action((isFetching) => {
    this.isFetching = isFetching
  }) 

  async updatePokemonList(offset) {
    this.setFecthingPokemon(true)
    const pkmJson = await this.fetchPokemons(offset)
    this.setFecthingPokemon(false)
    this.addPkmToList(this.pokemons, pkmJson)
  }
  
  addPkmToList = action((pokemons, pkmJson) => {
    this.pokemons = [...pokemons, ...pkmJson]
  })

  resetPkmDetail = action(() => {
    this.pokemonDetail = {}
  })

  setPokemonDetail = action((pokemon) => {
    this.pokemonDetail = pokemon
  })

  onReachEndList() {
    currentOffset += LIMIT
    this.updatePokemonList(currentOffset)
  }

  async updatePokemonDetail(name) {
    this.setFecthingPokemon(true)
    const pkmDetail = await this.getPokemonDetail(name)
    this.setFecthingPokemon(false)
    this.setPokemonDetail(pkmDetail)
  }

  constructor() {
    makeAutoObservable(this)
  }
}

export default PkmStore