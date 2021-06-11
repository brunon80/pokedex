import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { toCaptalize } from '../../../utils/toCaptalize';

export type Ability = {
  ability: {
    name: string
  }
}

export type AbilitiesProps = {
  abilities: Ability[]
}

const Abilities: React.FC<AbilitiesProps> = ({ abilities }) => {
  return (
    <View style={styles.container} testID="abilities" >
      <Text style={styles.title}>Abilities</Text>
      <View style={styles.wrapper}>
        {
          abilities?.map(({ ability }) => <Text style={styles.ability} key={ability?.name} testID="ability" >{toCaptalize(ability?.name)}</Text>)
        }
      </View>
    </View>
  )
}

export default Abilities

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  wrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  ability: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#F7F7F7',
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    marginHorizontal: 5
  }
})