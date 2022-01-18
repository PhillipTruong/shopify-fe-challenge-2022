import React from 'react'
import ImageCard from './ImageCard'
import enTranslations from '@shopify/polaris/locales/en.json'
import { PolarisTestProvider } from '@shopify/polaris'
import { mount } from 'enzyme'
import LikeButton from '../LikeButton/LikeButton'

const mockImageCardData = {
  title: 'Chamaeleon Dark Nebulas',
  img: 'https://apod.nasa.gov/apod/image/2201/DarkNebulaVd_HmoRuuth_960.jpg',
  date: '2022-01-17',
  explanation: 'Sometimes the dark dust of interstellar space has an angular elegance.  Such is the case toward the far-south constellation of Chamaeleon. Normally too faint to see, dark dust is best known for blocking visible light from stars and galaxies behind it. In this four-hour exposure, however, the dust is seen mostly in light of its own, with its strong red and near-infrared colors giving creating a brown hue. Contrastingly blue, the bright star Beta Chamaeleontis is visible just to the right of center, with the dust that surrounds it preferentially reflecting blue light from its primarily blue-white color.  All of the pictured stars and dust occur in our own Milky Way Galaxy with -- but one notable exception: the white spot just below Beta Chamaeleontis is the galaxy IC 3104 which lies far in the distance.  Interstellar dust is mostly created in the cool atmospheres of giant stars and dispersed into space by stellar light, stellar winds, and stellar explosions such as supernovas.'
}

const mockImageCard = mount(
  <PolarisTestProvider i18n={enTranslations}>
    <ImageCard
      title={mockImageCardData.title}
      date={mockImageCardData.date}
      img={mockImageCardData.img}
      explanation={mockImageCardData.explanation}>
    </ImageCard>
  </PolarisTestProvider>
)

describe('Image Card', () => {
  it('Renders image card', () => {
    expect(mockImageCard.find(ImageCard)).toHaveLength(1)
  })

  it('Renders like button', () => {
    expect(mockImageCard.find(LikeButton)).toHaveLength(1)
  })

  it('Like button onClick', () => {
    expect(mockImageCard.find(LikeButton).prop('pressed')).toBe(false)
    mockImageCard.find(LikeButton).simulate('click')
    expect(mockImageCard.find(LikeButton).prop('pressed')).toBe(true)
  })
})
