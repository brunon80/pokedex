import React from 'react'
import BottomDetails from '../../../src/pages/details/UI/BottomDetails'
import SizeInfo from '../../../src/pages/details/UI/SizeInfo'
import Abilities from '../../../src/pages/details/UI/Abilities'
import { toCaptalize } from '../../../src/utils/toCaptalize';
import { render } from '@testing-library/react-native'

describe('Pkm Details Bottom Tests', () => {

  it('should render BottomDetails correctly', () => {
    const { queryByTestId } = render(<BottomDetails />)
    const component = queryByTestId('bottom-details')
    expect(component).toBeTruthy()
  });

  it('should render SizeInfo correctly', () => {
    const { queryByTestId } = render(<SizeInfo />)
    const component = queryByTestId('size-info')
    expect(component).toBeTruthy()
  });

  it('should render SizeInfo weight correctly', () => {
    const weight = 60

    const { queryByTestId } = render(<SizeInfo weight={weight} />)
    const component = queryByTestId('weight-info')
    expect(component.props.children).toBe('6kg')
  });

  it('should render SizeInfo weight correctly', () => {
    const height = 40

    const { queryByTestId } = render(<SizeInfo height={height} />)
    const component = queryByTestId('height-info')
    expect(component.props.children).toBe('4m')
  });

  it('should render SizeInfo base experience correctly', () => {
    const baseExpericence = 112

    const { queryByTestId } = render(<SizeInfo baseExpericence={baseExpericence} />)
    const component = queryByTestId('base-expericence-info')
    expect(component.props.children).toBe(baseExpericence)
  });

  it('should match snapshot <SizeInfo />', () => {
    const weight = 60
    const height = 40
    const baseExpericence = 112
    const component = render(
      <SizeInfo
        baseExpericence={baseExpericence}
        height={height}
        weight={weight} />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  // Habilidades

  it('should render Abilities correctly', () => {
    const { queryByTestId } = render(<Abilities />)
    const component = queryByTestId('abilities')
    expect(component).toBeTruthy()
  });

  it('should render an array of abilities', () => {

    const abilities = [
      {
        ability: {
          name: 'static'
        }
      },
      {
        ability: {
          name: 'poison pin'
        }
      },
    ]
    
    const { queryAllByTestId } = render(<Abilities abilities={abilities} />)
    const components = queryAllByTestId('ability')
    expect(components.length).toBeGreaterThan(0)

    components.forEach((comp, index) => {
      expect(comp.props.children).toBe(toCaptalize(abilities[index].ability.name))
    })

  })

})