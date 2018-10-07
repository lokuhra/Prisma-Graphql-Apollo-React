import React, { Component } from 'react'
import Application from '../../components/Application'
import Query from '../../components/Query'

export default class index extends Component {
  render() {
    return (
      <div>
        <Application title={'titulo'}>
          <Query />

        </Application>
      </div>
    )
  }
}
