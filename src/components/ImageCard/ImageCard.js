import React, { useCallback, useState } from 'react'

import {
    Card,
    Heading,
    Subheading,
    TextContainer,
    Button,
} from '@shopify/polaris';

import {
    CardContent,
    Image
} from './ImageCard.styled'

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
                    <Button pressed={isLiked} onClick={handleLike}>
                        Like
                    </Button>
                </TextContainer>
            </CardContent>
        </Card>
    )
}

export default ImageCard