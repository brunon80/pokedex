import React from 'react'
import { View, StyleSheet } from 'react-native'
import SizeInfo, { SizeInfoProps } from './SizeInfo';
import Abilities, { Ability } from './Abilities';
 
type BottomDetailsProps = {
  sizeInfo: SizeInfoProps
  abilites: Ability[]
}

const BottomDetails: React.FC<BottomDetailsProps> = ({ sizeInfo, abilites }) => {
  return (
    <View  testID="bottom-details" style={styles.wrapper}>
      <SizeInfo height={sizeInfo?.height} weight={sizeInfo?.weight} baseExpericence={sizeInfo?.baseExpericence} />
      <Abilities abilities={abilites} />
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