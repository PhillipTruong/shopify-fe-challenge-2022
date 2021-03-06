# Spacestagram - Shopify Front End Developer Intern Challenge - Summer 2022

[![Netlify Status](https://api.netlify.com/api/v1/badges/c93d5a1c-dc93-4e8e-8af2-eeee1161b622/deploy-status)](https://app.netlify.com/sites/philliptruong-spacestagram/deploys)

Spacestagram is a simple webpage that pulls and showcases Astronomy Picture of the Day (APOD) from 
[NASA's APIs](https://api.nasa.gov/). It is mainly built using React and Shopify's design system Polaris. 
This project was built for Shopify's front end developer intern challenge - Summer 2022. 

The challenge specifications can be found [here](https://docs.google.com/document/d/13zXpyrC2yGxoLXKktxw2VJG2Jw8SdUfliLM-bYQLjqE/edit#heading=h.6kafoyko4s5j). 

Live deployed project can be found [here](https://philliptruong-spacestagram.netlify.app/).
## Table of Contents
  - [Functionality](#functionality)
  - [Installation](#installation)
  - [Technology & Libraries](#technology---libraries)
  - [Other Notes](#other-notes)
  - [Useful Resources](#useful-resources)

## Functionality

Spacestagram automatically pulls the APODs from the last seven days.

Users can:

- View APODs title, image, date, and explanation
- Specify which date range to view APODs from using the date picker
- Like and unlike images (non-persistent)
- Enjoy an easter egg loading screen while waiting for the API call

Spacestagram is desktop/mobile responsive thanks to Polaris!

Spacestagram also tries its best to be accessible and semantic. It achieves a 92 Accessibility score from Google Lighthouse.
- This is done through using correct HTML elements for their intended purpose (thanks again Polaris) and appropriate aria labels

## Installation

To run this project locally, your own NASA API key and a copy of this repo is required.


To get your own NASA API key please go to this [link](https://api.nasa.gov/#:~:text=Browse%20APIs-,Generate%20API%20Key,-Sign%20up%20for) and sign up.

- You do not need to enter anything more than your first name, last name, and email address (Application URL not needed).


Please clone the repo using `git clone`.

Navigate to the project directory. On Mac use `cd SHOPIFY-FE-CHALLENGE-2022`.

Install the frontend dependencies:

```
npm install
```

Create a `.env` file in the root directory of the project.

Inside the `.env` file add the following:
```
REACT_APP_NASA_API_KEY={YOUR NASA API KEY}
```

Replacing the curly brackets and its content, `{YOUR NASA API KEY}`, with your NASA API key.

Run the project:

```
npm start
```

These above steps runs the project in development mode.   
Open http://localhost:3000 to view it in your browser.

To run the tests use:

```
npm test
```

## Technology & Libraries

- **ReactJS**: Base project was created using [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
- **Polaris**: Main component/design system
- **Styled-Components**: Used in places where Polaris couldn't be customized (Like button & APOD Image card)
- **React Icons**: Like button icon
- **Axios**: HTTP requests to NASA API
- **ESLint**: Project linter (standard React project linter)
- **Jest**: JS Testing
- **Enzyme**: React component output testing

## Other Notes

I decided to use Polaris as a challenge to learn the design system from Shopify. I quickly realized that it is not 
supposed to be used for any use case, and is specifically for building consistent merchant pages on Shopify's platform. 
That being said, this challenge helped me better understand the component library, and I have to say it was a lot of fun.

I learned a lot through looking at the implementation of the components, which props were required, and the overall 
design structure of the Polaris components. 

If I were to refactor the project somethings I would change are:
- Pulling out and refactoring components to be more reusable and robust
- Tackle image responsiveness and performance of overall app
- Add more unit and integration tests

## Useful Resources

I ended up using an undocumented Sticky component from Polaris; these two threads really helped:

- https://github.com/Shopify/polaris-react/issues/2050
- https://github.com/Shopify/polaris-react/issues/2149

For testing between React, Polaris, Jest and Enzyme:

- https://github.com/Shopify/polaris-react/issues/396
- https://github.com/Shopify/polaris-react/blob/main/documentation/guides/migrating-from-v3-to-v4.md#polaris-testing

The following is a quick intro to Aria labels and why they are important:
[![Intro to ARIA -- A11ycasts #13](https://img.youtube.com/vi/g9Qff0b-lHk/0.jpg)](https://www.youtube.com/watch?v=g9Qff0b-lHk)