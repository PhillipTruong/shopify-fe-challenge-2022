import React from 'react'
import { FaHeart } from 'react-icons/fa'

import {
    Button
} from './LikeButton.styled'

const LikeButton = ({ pressed, onClick}) => (
        <Button pressed={pressed} onClick={onClick}>
            <FaHeart />
        </Button>
)
export default LikeButton