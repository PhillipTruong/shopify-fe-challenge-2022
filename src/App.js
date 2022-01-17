import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import ImageCard from './components/ImageCard/ImageCard'
import StickyLayoutSection from './components/StickyLayoutSection/StickyLayoutSection'

import { formatNasaApiDate } from './util/dateFormatter'

import {
  Page,
  Layout,
  EmptyState,
  DatePicker,
  Card,
  Spinner,
  DisplayText,
  Stack
} from '@shopify/polaris'

const nasaApiUrl = 'https://api.nasa.gov/planetary/apod/'
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY

const App = () => {
  const today = new Date(Date.now())
  const currentDate = new Date()
  const previous7DaysDate = new Date(currentDate.setDate(currentDate.getDate() - 7))

  const [nasaImages, setNasaImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [{ month, year }, setDate] = useState({ month: today.getMonth(), year: today.getFullYear() })
  const [selectedDates, setSelectedDates] = useState({
    start: previous7DaysDate,
    end: today
  })

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    []
  )

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true)
      await axios
        .get(
          nasaApiUrl,
          {
            params: {
              api_key: nasaApiKey,
              start_date: formatNasaApiDate(selectedDates.start),
              end_date: formatNasaApiDate(selectedDates.end),
              thumbs: true,
              hd: true
            }
          }
        )
        .then((res) => {
          console.log(res.data)
          const sortedResData = res.data.sort((b, a) => ((a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0)))
          setNasaImages(sortedResData)
        })
        .catch((err) => { // TODO: Handle err
          console.log(err)
        })
      setIsLoading(false)
    }
    getImages()
  }, [selectedDates])

  return (
    <Page
      title='Spacestagram'
      subtitle="Image-sharing from the final frontier - Brought to you by NASA's Astronomy Photo of the Day (APOD) API"
      divider={true}
    >
      <Layout>
        {isLoading
          ? (
            <Layout.Section>
              <EmptyState
              >
                <Stack vertical spacing='extraLoose'>
                  <DisplayText size='medium'>Loading images from NASA</DisplayText>
                  <Spinner size='large'></Spinner>
                  <p>Sit tight while we assess</p>
                </Stack>
              </EmptyState>
            </Layout.Section>
            // eslint-disable-next-line indent
          )
          : (
            <>
              <StickyLayoutSection>
                <Card sectioned subdued>
                  <DatePicker
                    month={month}
                    year={year}
                    onChange={setSelectedDates}
                    onMonthChange={handleMonthChange}
                    selected={selectedDates}
                    allowRange
                    disableDatesAfter={today}
                  />
                </Card>
              </StickyLayoutSection>
              <Layout.Section>
                {nasaImages.map((img, id) =>
                  <ImageCard
                    key={id}
                    id={id}
                    title={img.title}
                    date={img.date}
                    img={img.media_type !== 'video' ? img.hdurl : img.thumbnail_url}
                    explanation={img.explanation}
                  />
                )}
              </Layout.Section>
            </>
            // eslint-disable-next-line indent
          )
        }
      </Layout>
    </Page>
  )
}

export default App
