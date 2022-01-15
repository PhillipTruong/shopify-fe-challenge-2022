import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ImageCard from './components/ImageCard/ImageCard'

import {
  Page,
  Layout,
  EmptyState,
} from '@shopify/polaris'

const nasaApiUrl = 'https://api.nasa.gov/planetary/apod/'
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY

const App = () => {
  const [nasaImages, setNasaImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true)
      await axios
        .get(
          nasaApiUrl,
          {
            params: {
              api_key: nasaApiKey,
              count: 10,
              thumbs: true,
              hd: true,
            }
          }
        )
        .then((res) => {
          console.log(res.data) //TODO: Handle res
          setNasaImages(res.data)
        })
        .catch((err) => { //TODO: Handle err
          console.error(err)
        });
      setIsLoading(false)
    }
    getImages()
  }, [])

  return (
    <Page
      title='Spacestagram'
      subtitle="Image-sharing from the final frontier - Brought to you by NASA's Astronomy Photo of the Day (APOD) API"
      narrowWidth={true}
      divider={true}
    >
      <Layout>
        <Layout.Section>
          {isLoading ? (
            <EmptyState
              heading="Loading images from NASA"
              image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
            >
              <p>Sit tight while we assess</p>
            </EmptyState>
          ) : (
            nasaImages.map((img, id) =>
              <ImageCard
                key={id}
                id={id}
                title={img.title}
                date={img.date}
                img={img.media_type !== 'video' ? img.hdurl : img.thumbnail_url}
                explanation={img.explanation}
              />
            )
          )
          }
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default App
