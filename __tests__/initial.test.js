import React from 'react'
import { render } from '@testing-library/react-native'
import PkmListItem from '../src/pages/home/UI/PkmListItem'

describe('PkmListItem Tests', () => {

  it('should render correctly', () => {
    const item = {
      name: 'teste',
      image: 'http://teste-url'
    }

    const { queryByTestId } = render(<PkmListItem item={item} index={0} onGoToDetails={() => null} />)
    const component = queryByTestId('list-item')
    expect(component).toBeTruthy()
  })

})