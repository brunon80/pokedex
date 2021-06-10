import React from 'react'
import BottomDetails from '../../src/pages/details/UI/BottomDetails'
import SizeInfo from '../../src/pages/details/UI/SizeInfo'
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

})