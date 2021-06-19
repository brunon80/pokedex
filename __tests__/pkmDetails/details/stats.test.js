import React from 'react'
import { render } from '@testing-library/react-native'
import StatsRow from '../../../src/pages/details/UI/StatsRow'
import Stats from '../../../src/pages/details/UI/Stats';

describe('Pkm Stats Tests', () => {
  it('should render a Stats row correctly', () => {
    const { queryByTestId } = render(<StatsRow />)
    const component = queryByTestId('stats-row')
    expect(component).toBeTruthy()
  });

  it('should receive their props correctly', () => {
    const label = 'HP'
    const value = 35
    
    const { queryByTestId } = render(<StatsRow label={label} value={value} />)
    const labelComp = queryByTestId('stats-label')
    const valueComp = queryByTestId('stats-value')

    expect(labelComp.props.children).toBe(label)
    expect(valueComp.props.children).toBe(value)
  });

  it('should render a list of StatsRow', () => {

    const stats = [
      {
        base_stat: 48,
        stat: {
          name: 'hp'
        }
      },
      {
        base_stat: 60,
        stat: {
          name: 'attack'
        }
      }
    ]

    const { queryAllByTestId } = render(<Stats stats={stats} />)
    const rowsComp = queryAllByTestId('stats-row')
    expect(rowsComp.length).toBe(stats.length)
  });
})