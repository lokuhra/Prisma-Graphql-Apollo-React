import React, { Component } from 'react'

import Query from '../Query'
import Mutation from '../Mutation'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 'cjmy1cq9p001r09726fnzkxya',
      name: 'Pablo Fagundez',
    }
  }
  render() {
    return (
      <div className="Index">
        <header className="App-header">
          <p>
            Edit <code>src/Index.js</code> and save to reload. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Adipisci beatae ducimus eos
            error et modi, non. Consectetur cupiditate distinctio dolorum ex
            facere ipsa iusto laudantium, molestiae molestias neque numquam
            repellendus!
          </p>
          <Query />
          <Mutation id={this.state.id} name={this.state.name} />
        </header>
      </div>
    )
  }
}

export default Index
