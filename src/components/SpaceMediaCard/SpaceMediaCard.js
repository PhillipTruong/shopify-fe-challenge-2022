/*
Deprecated component.

This was intended to be the space image card but it wasn't as customizable as I would have liked. Therefore I will be using a regular Card component from the Polaris library.
*/

import React from 'react'
import {
  MediaCard,
  Card
} from '@shopify/polaris'

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
            onAction: () => { }
          }
        }
      >
        <img
          alt={title}
          width="100%"
          height="100%"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          src={img}
        />
      </MediaCard>
    </Card>
  )
}

export default SpaceMediaCard
