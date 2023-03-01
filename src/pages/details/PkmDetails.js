import React, { useLayoutEffect } from 'react';
import { RefreshControl, StyleSheet } from 'react-native'
import { observer } from 'mobx-react'
import { LinearGradient } from 'expo-linear-gradient'
import { usePkmStore } from '../../mobx/pkmProvider';
import TopDetails from './UI/TopDetails'
import { colorTypes } from '../../utils/pkmTypesColor';
import { toCaptalize } from '../../utils/toCaptalize';
import BottomDetails from './UI/BottomDetails';
import Container from '../../../lib/Container';
import Content from '../../../lib/Content';

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

  const mainColor = colorTypes[pkmStore.pokemonDetail?.types?.[0]?.type?.name]?.main
  // eslint-disable-next-line no-prototype-builtins
  const secondaryColor = pkmStore.pokemonDetail?.types?.hasOwnProperty(1)
    ? colorTypes[pkmStore.pokemonDetail?.types?.[1]?.type?.name]?.main
    : mainColor

  return (
    <Container>
      <Content
        scrollViewProps={{
          style: {
            backgroundColor: mainColor,
          },
          refreshControl: <RefreshControl
            refreshing={pkmStore.isFetching}
          />
        }} >
        {
          mainColor &&
          <LinearGradient
            colors={[mainColor, secondaryColor]}
            style={styles.gradient}
          />
        }
        {
          !pkmStore.isFetching &&
          <>
            <TopDetails
              pkmImage={pokemon.image}
              pokedexEntry={pkmStore.pokemonDetail.order}
              pokemonName={pokemonName}
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

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
  }
})