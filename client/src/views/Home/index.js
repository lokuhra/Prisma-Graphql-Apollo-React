import React, { Component } from 'react'
import Application from '../../components/Application'

export default class index extends Component {
  render() {
    return (
      <div>
        <Application title={'titulo'}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            laborum, nobis nostrum odit quos rem saepe sed totam ullam velit?
            Dicta dignissimos dolorem ducimus earum quia repellat, repellendus
            vel voluptate.
          </p>
        </Application>
      </div>
    )
  }
}
