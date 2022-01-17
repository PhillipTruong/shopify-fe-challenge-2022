import React from 'react'
import PropTypes from 'prop-types'

import {
  Layout,
  Sticky
} from '@shopify/polaris'

const StickyLayoutSection = ({ children }) => (
  <Layout.Section secondary disableWhenStacked>
    <Sticky disableWhenStacked offset>
      {children}
    </Sticky>
  </Layout.Section>
)

StickyLayoutSection.propTypes = {
  children: PropTypes.any
}
export default StickyLayoutSection
