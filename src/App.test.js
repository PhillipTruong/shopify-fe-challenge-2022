import React from 'react'
import App from './App'
import { mount } from 'enzyme'
import { PolarisTestProvider } from '@shopify/polaris'

describe('App', () => {
  it('App renders', () => {
    const app = mount(
      <PolarisTestProvider>
        <App />
      </PolarisTestProvider>)
    expect(app.find(App)).toHaveLength(1)
  })
})
