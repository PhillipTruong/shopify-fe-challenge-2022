import React, { useState, useEffect } from 'react'
import axios from 'axios';

// import ImageCard from './components/ImageCard';
import SpaceCard from './components/SpaceCard';

import {
  Page,
  Layout,
  EmptyState,
} from '@shopify/polaris';

const App = () => {
  const [nasaImages, setNasaImages] = useState([])

  useEffect(() => {
    const getImages = async () => {
      await axios
        .get(
          `https://api.nasa.gov/planetary/apod/`,
          {
            params: {
              api_key: process.env.REACT_APP_NASA_API_KEY,
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
    }

    getImages()
  }, [])

  return (
    <Page title='Spacestagram' subtitle="Image-sharing from the final frontier - Brought to you by NASA's Astronomy Photo of the Day (APOD) API">
      <Layout>
        <Layout.Section>
          {nasaImages.length === 0 ? ( //TODO: might need to add a loading variable, what if there is an error and the lenth is always 0...
            <EmptyState
              heading="Loading images from NASA"
              image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
            >
              <p>Sit tight while we assess.</p>
            </EmptyState>
          ) : (
            nasaImages.map((img, id) =>
              <SpaceCard
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
