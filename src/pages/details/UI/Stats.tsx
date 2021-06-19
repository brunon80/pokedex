import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import StatsRow from "./StatsRow";

type StatsProps = {
  stats: Array<{
    base_stat: number,
    stat: {
      name: string
    }
  }>
  pokemonTypeColor: {
    main: string
  }
}

const Stats: React.FC<StatsProps> = ({ stats, pokemonTypeColor }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      {
        stats?.map(stat =>
          <StatsRow
            key={stat.stat.name}
            label={stat.stat.name}
            pokemonTypeColor={pokemonTypeColor}
            value={stat.base_stat} />
        )
      }
    </View>
  )
}

export default Stats;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
})