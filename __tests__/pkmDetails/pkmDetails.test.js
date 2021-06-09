import React from 'react'
import TopDetails from '../../src/pages/details/UI/TopDetails'
import { render } from '@testing-library/react-native'

describe('Pkm Details Tests', () => {

  it('should render TopDetails correctly', () => {
    const { queryByTestId } = render(<TopDetails />)
    const component = queryByTestId('top-details')
    expect(component).toBeTruthy()
  })

  it('should has pokedex number position', () => {
    const { queryByTestId } = render(<TopDetails pokedexEntry={25} />)
    const component = queryByTestId('pokedex-entry-number')
    expect(component.props.children).toBe('#025')
  })

  it('should render pokemon name', () => {
    const pokemonName = 'pikachu'

    const { queryByTestId } = render(<TopDetails pokemonName={pokemonName} />)
    const component = queryByTestId('pokemon-name')
    expect(component.props.children).toBe(pokemonName)
  })

  it('should has a background color prop', () => {
    const pokemonTypeColor = { main: '#1234' }

    const { queryByTestId } = render(<TopDetails pokemonTypeColor={pokemonTypeColor} />)
    const component = queryByTestId('top-details')
    expect(component.props.style[1].backgroundColor).toBe(pokemonTypeColor?.main)
  })

  it('should render pokemon type badge', () => {
    const pokemonTypes = ['electric', 'normal']

    const { queryAllByTestId } = render(<TopDetails pokemonTypes={pokemonTypes} />)
    const components = queryAllByTestId('pokemon-type')

    expect(components.length).toEqual(pokemonTypes.length)

    components.forEach((component, index) => {
      expect(component.props.children).toBe(pokemonTypes[index])
    })
  })

  it('should render pokemon image', () => {
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'

    const { queryByTestId } = render(<TopDetails pkmImage={url} />)
    const component = queryByTestId('pokemon-image')
    expect(component.props.source.uri).toBe(url)
  })

  it('should match snapshot <TopDetails />', () => {
    const pokemonName = 'pikachu'
    const pokedexEntry = 32
    const pokemonTypes = ['electric', 'normal']
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    const component = render(<TopDetails
      pkmImage={url}
      pokemonTypes={pokemonTypes}
      pokedexEntry={pokedexEntry}
      pokemonName={pokemonName}
    />).toJSON()
    expect(component).toMatchSnapshot()
  })

})