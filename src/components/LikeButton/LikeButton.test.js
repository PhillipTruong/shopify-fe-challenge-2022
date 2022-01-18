import React from 'react'
import LikeButton from './LikeButton'
import { Button } from './LikeButton.styled'
import { shallow } from 'enzyme'

const mockedOnClick = jest.fn()

describe('Like Button', () => {
  it('Renders like button', () => {
    const buttonElement = shallow(<LikeButton pressed={false} onClick={mockedOnClick} />)
    expect(buttonElement.find(Button)).toHaveLength(1)
  })
})
