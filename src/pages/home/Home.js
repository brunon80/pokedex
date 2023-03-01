import React, { useEffect } from 'react';
import { View, StyleSheet, RefreshControl } from 'react-native'
import { FlashList } from "@shopify/flash-list";
import { observer } from 'mobx-react'
import { usePkmStore } from '../../mobx/pkmProvider'
import PkmListItem from './UI/PkmListItem'


const HomeScreen = observer(({ navigation }) => {

  const { pkmStore } = usePkmStore()

  useEffect(() => {
    pkmStore.updatePokemonList()
  }, [])

  function onGoToDetails(pokemon) {
    navigation.navigate('Details', { pokemon })
  }

  return (
    <>
      <View style={styles.bgTop} />
      <View style={styles.bgBottom} />
      <FlashList
        refreshControl={<RefreshControl refreshing={pkmStore.isFetching} />}
        estimatedItemSize={100}
        data={pkmStore.pokemons}
        keyExtractor={(pkm) => pkm.name}
        renderItem={({ item, index }) =>
          <PkmListItem 
            item={item} 
            index={index}
            onGoToDetails={onGoToDetails}
          />
        }
        onEndReached={() => pkmStore.onReachEndList()}
      />
    </>
  )
})

export default HomeScreen;

const styles = StyleSheet.create({
  bgTop: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 0,
    left: 0,
    width: '100%',
    height: '40%'
  },
  bgBottom: {
    position: 'absolute',
    backgroundColor: 'red',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    marginTop: '60%'
  }
})