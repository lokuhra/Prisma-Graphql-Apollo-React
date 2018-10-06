import React, { Component } from 'react'

import { Query, Mutation} from 'react-apollo'
import gql from 'graphql-tag'

const GET_PERSONS = gql `
  query {
  personaAll{
    id
    name
    apellido
  }
}
`
const UPDATE_PERSON = gql`
  mutation updatePersona($id: ID!, $name: String!) {
    updatePersona(id: $id, name: $name) {
      id
      name
    }
  }
`;


const Personas = () => (
    <Query query={GET_PERSONS}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <ul>
                    {data.personaAll.map(item => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            );
        }}
    </Query>
);

const UpdatePersona = (props) => (
    <Mutation mutation={UPDATE_PERSON}>
        {(updateTodo, { loading, error }) => (
            <div>
              <button onClick={() => updateTodo({ variables: { id:props.id, name: props.name } })}>asd</button>
                {loading && <p>Loading...</p>}
                {error && <p>Error :( Please try again</p>}
            </div>
        )}
    </Mutation>


)

class App extends Component {
constructor(props) {
  super(props)
  this.state = {
    id:"cjmxscp7m000h0972gq0kh3g7",
      name:"roberto carlos 2266"
  }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Adipisci beatae ducimus eos
            error et modi, non. Consectetur cupiditate distinctio dolorum ex
            facere ipsa iusto laudantium, molestiae molestias neque numquam
            repellendus!
          </p>
          <Personas />
          <UpdatePersona id={this.state.id} name={this.state.name}/>
        </header>
      </div>
    )
  }
}

export default App
