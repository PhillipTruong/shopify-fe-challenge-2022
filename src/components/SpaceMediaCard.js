// DEPRECATED

import {
    MediaCard,
    Card
} from '@shopify/polaris';

const SpaceMediaCard = ({ id, title, date, img, explanation }) => {
    return (
        <Card>
        <MediaCard
            title={title + ' | ' + date}
            description={explanation}
            portrait={true}
            subdued
            primaryAction={
                {
                    content: 'Like',
                    onAction: () => {},
                }
            }
            >
            <img
                alt={title}
                width="100%"
                height="100%"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
                src={img}
                />
        </MediaCard>
        </Card>
    )
}

export default SpaceMediaCard