import React from 'react'
import { FaHeart } from 'react-icons/fa'
import PropTypes from 'prop-types'

import {
  Button
} from './LikeButton.styled'

const LikeButton = ({ pressed, onClick }) => (
  <Button
    aria-label='like button'
    role='switch'
    aria-checked={pressed}
    pressed={pressed}
    onClick={onClick}>
    <FaHeart />
  </Button>
)

LikeButton.propTypes = {
  pressed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default LikeButton
