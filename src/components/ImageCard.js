import {
    Card,
    Image,
    Heading,
    Subheading,
    TextContainer,
    Stack,
} from '@shopify/polaris';

const ImageCard = ({ id, title, date, img, explanation }) => {
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
        </Card>
    )
}

export default ImageCard