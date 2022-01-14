import {
    MediaCard,
} from '@shopify/polaris';

const SpaceCard = ({ id, title, date, img, explanation }) => {
    return (
        <MediaCard
            title={title + ' | ' + date}
            description={explanation}
            portrait={true}
            primaryAction={{
                content: 'Like',
                onAction: () => { alert('Liked ' + title) }, //TODO: Add like onAction
            }}>
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
    )
}

export default SpaceCard