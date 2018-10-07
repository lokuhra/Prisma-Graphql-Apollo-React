import React from 'react'
import { Query } from 'react-apollo'
import queries from '../../utils/queries'

import {
  List,
  ListGroup,
  ListDivider,
  ListItem,
  ListItemGraphic,
  ListItemMeta,
} from 'rmwc'

const _Query = () => (
  <Query query={queries.query.GET_PERSONS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return (
        <ListGroup>
          {data.personaAll.map(item => (
            <ListItem key={item.id}>
              <ListItemGraphic
                icon="person"
                style={{ backgroundColor: 'lightgray' }}
              />
              {item.name}
              <ListItemMeta icon="info" />
            </ListItem>
          ))}
        </ListGroup>
      )
    }}
  </Query>
)
export default _Query
