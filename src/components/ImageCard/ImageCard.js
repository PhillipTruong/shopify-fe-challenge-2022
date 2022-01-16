import React, { useCallback, useState } from 'react'

import {
    Card,
    Heading,
    Subheading,
    TextContainer,
} from '@shopify/polaris';

import {
    CardContent,
    Image
} from './ImageCard.styled'

import LikeButton from '../LikeButton/LikeButton';

const ImageCard = ({ id, title, date, img, explanation }) => {
    const [isLiked, setIsLiked] = useState(false)

    const handleLike = useCallback(() => {
        setIsLiked(!isLiked)
    }, [isLiked])

    return (
        <Card>
            <Card.Section flush>
                <Image source={img} width="100%" height="100%" alt={title}></Image>
            </Card.Section>
            <CardContent>
                <TextContainer>
                    <Heading>{title}</Heading>
                    <Subheading>{date}</Subheading>
                    <p>{explanation}</p>
                    <LikeButton pressed={isLiked} onClick={handleLike} />
                </TextContainer>
            </CardContent>
        </Card>
    )
}

export default ImageCard