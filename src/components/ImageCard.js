import React, { useCallback, useState } from 'react'

import {
    Card,
    Image,
    Heading,
    Subheading,
    TextContainer,
    Stack,
    Button,
} from '@shopify/polaris';

const ImageCard = ({ id, title, date, img, explanation }) => {
    const [isLiked, setIsLiked] = useState(false)

    const handleLike = useCallback(() => {
        setIsLiked(!isLiked);
    }, [isLiked]);

    return (
        <Card sectioned>
            <TextContainer>
                <Heading>{title}</Heading>
                <Subheading>{date}</Subheading>
            </TextContainer>
            <Stack vertical={true} alignment='center'>
                <Image source={img} width="300" alt={title}></Image>
            </Stack>
            <p>{explanation}</p>
            <Button pressed={isLiked} onClick={handleLike}>
                Like
            </Button>
        </Card>
    )
}

export default ImageCard