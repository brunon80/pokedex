import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export type SizeInfoProps = {
  weight: number
  height: number
  baseExpericence: number
}

const SizeInfo: React.FC<SizeInfoProps> = ({ weight, height, baseExpericence }) => {
  return (
    <View style={styles.wrapper} testID="size-info">
      <View style={styles.textWrapper} >
        <Text style={styles.atrubites} testID="height-info">{height ? `${height / 10}m`.replace('.', ',') : '?'}</Text>
        <Text style={styles.label}>Height</Text>
      </View>
      <View style={styles.textWrapper} >
        <Text style={styles.atrubites} testID="weight-info">{weight ? `${weight / 10}kg` : '?'}</Text>
        <Text style={styles.label}>Weight</Text>
      </View>
      <View style={styles.textWrapper} >
        <Text style={styles.atrubites} testID="base-expericence-info">{baseExpericence ? baseExpericence : '?'}</Text>
        <Text style={styles.label}>Base Exp</Text>
      </View>
    </View>
  )
}

export default SizeInfo

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  textWrapper: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  atrubites: {
    fontWeight: 'bold',
    fontSize: 25
  },
  label: {
    fontSize: 15,
    marginTop: 5
  }
})