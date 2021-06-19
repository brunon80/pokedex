import React from 'react'
import { View, StyleSheet } from 'react-native'
import SizeInfo, { SizeInfoProps } from './SizeInfo';
import Abilities, { Ability } from './Abilities';
import Stats from './Stats';
 
type BottomDetailsProps = {
  sizeInfo: SizeInfoProps
  abilites: Ability[]
  pokemonTypeColor: {
    main: string
  }
  stats: Array<{
    base_stat: number,
    stat: {
      name: string
    }
  }>
}


const BottomDetails: React.FC<BottomDetailsProps> = ({ sizeInfo, abilites, pokemonTypeColor, stats }) => {
  return (
    <View  testID="bottom-details" style={styles.wrapper}>
      <SizeInfo height={sizeInfo?.height} weight={sizeInfo?.weight} baseExpericence={sizeInfo?.baseExpericence} />
      <Abilities abilities={abilites} />
      <Stats pokemonTypeColor={pokemonTypeColor} stats={stats} />
    </View>
  )
}

export default BottomDetails;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flexGrow: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20
  }
})