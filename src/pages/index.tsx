import * as React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Home" />
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
  </Layout>
)

export default IndexPage
