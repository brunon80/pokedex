import React, { useLayoutEffect } from 'react';
import { RefreshControl, View } from 'react-native'
import { observer } from 'mobx-react'
import { Container, Content } from '@somapay/storybook-somapay-mobile'
import { usePkmStore } from '../../mobx/pkmProvider';
import TopDetails from './UI/TopDetails'
import { colorTypes } from '../../utils/pkmTypesColor';
import { toCaptalize } from '../../utils/toCaptalize';
import BottomDetails from './UI/BottomDetails';

const DEFAULT_COLOR = 'red'

const PkmDetails = observer(({ route, navigation }) => {
  const { pokemon } = route.params
  const { pkmStore } = usePkmStore()

  useLayoutEffect(() => {
    updateHeaderBar()
  }, [navigation, pkmStore.pokemonDetail?.types])

  useLayoutEffect(() => {
    pkmStore.updatePokemonDetail(pokemon.name)
    return () => {
      pkmStore.resetPkmDetail()
    }
  }, [])

  function updateHeaderBar(params) {
    navigation.setOptions({
      headerTitle: 'Pokemon info',
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: colorTypes[pkmStore.pokemonDetail?.types?.[0]?.type?.name]?.main || DEFAULT_COLOR
      },
    })
  }

  const types = pkmStore?.pokemonDetail?.types?.map(({ type }) => type.name)
  const pokemonName = toCaptalize(pokemon.name)

  return (
    <Container>
      <Content
        scrollViewProps={{
          contentContainerStyle: { 
            backgroundColor: !pkmStore.isFetching 
            ? colorTypes[pkmStore.pokemonDetail?.types?.[0]?.type?.name]?.main
            : DEFAULT_COLOR
           },
          refreshControl: <RefreshControl
            refreshing={pkmStore.isFetching}
          />
        }} >
        {
          !pkmStore.isFetching &&
          <>
            <TopDetails
              pkmImage={pokemon.image}
              pokedexEntry={pkmStore.pokemonDetail.order}
              pokemonName={pokemonName}
              pokemonTypeColor={colorTypes[pkmStore.pokemonDetail?.types?.[0]?.type?.name]}
              pokemonTypes={types}
            />
            <BottomDetails
              sizeInfo={{
                baseExpericence: pkmStore.pokemonDetail.base_experience,
                height: pkmStore.pokemonDetail.height,
                weight: pkmStore.pokemonDetail.weight
              }}
              abilites={pkmStore.pokemonDetail.abilities}
              pokemonTypeColor={colorTypes[pkmStore.pokemonDetail?.types?.[0]?.type?.name]}
              stats={pkmStore.pokemonDetail.stats}
            />
          </>
        }
      </Content>
    </Container>
  )
})

export default PkmDetails;