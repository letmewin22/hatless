import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import { Navbar } from "./Navbar"

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Navbar />
        <main>{children}</main>
    </>
  )
}

export default Layout
