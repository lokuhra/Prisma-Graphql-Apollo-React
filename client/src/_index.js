import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
// import App from './components/App'
import Home from './views/Home'

import 'material-components-web/dist/material-components-web.min.css'


const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/',
  options: {
    reconnect: true,
  },
})

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

// const isMobile = ()=> window.innerWidth<600 ? true : false

ReactDOM.render(
  <ApolloProvider client={client}>
    <div>
      <Home />
    </div>
  </ApolloProvider>,
  document.getElementById('root'),
)
