import React from 'react'

import {
    Layout,
    Sticky,
} from '@shopify/polaris'

const StickyLayoutSection = ({ children }) => (
    <Layout.Section secondary disableWhenStacked>
        <Sticky disableWhenStacked offset>
            {children}  
        </Sticky>
    </Layout.Section>
)

export default StickyLayoutSection