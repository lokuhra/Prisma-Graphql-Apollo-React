import React from 'react'
import { Helmet } from 'react-helmet'

const _Helmet = ({ title }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/*<link*/}
          {/*rel="stylesheet"*/}
          {/*href="../../style/normalize.css"*/}
      {/*/>*/}
      {/*<link*/}
          {/*rel="stylesheet"*/}
          {/*href="../../style/material-components-web.css"*/}
      {/*/>*/}
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </Helmet>
)

export default _Helmet
