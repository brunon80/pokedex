import React, { useCallback } from 'react'
import { View, Image, Text, StyleSheet, Pressable } from 'react-native'
import { observer } from 'mobx-react'
import addZeros from '../../../utils/addZeros';
import { toCaptalize } from '../../../utils/toCaptalize';

const  PkmListItem = observer(({ item, index, onGoToDetails }) => {
  const addZerosCb = useCallback(() => {
    const number = `${index + 1}`
    return addZeros(number)
  }, [index])

  return (
    <Pressable testID='list-item' onPress={() => onGoToDetails(item)} style={styles.pokemonItem}>
      <Text style={styles.itemText}>#{addZerosCb()} {toCaptalize(item.name)}</Text>
      <Image
        resizeMode="contain"
        style={styles.pkmLogo}
        source={{ uri: item.image }}
      />
    </Pressable>
  )
})


export default PkmListItem

const styles = StyleSheet.create({
  pokemonItem: {
    margin: 10,
    marginLeft: 0,
    paddingLeft: 20,
    backgroundColor: 'white',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  pkmLogo: {
    width: 80,
    height: 80
  }
})