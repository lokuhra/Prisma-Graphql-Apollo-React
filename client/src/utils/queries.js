import gql from 'graphql-tag'

export default {
  query: {
    GET_PERSONS: gql`
      query {
        personaAll {
          id
          name
          apellido
        }
      }
    `,
  },
  mutation: {
    UPDATE_PERSON: gql`
      mutation updatePersona($id: ID!, $name: String!) {
        updatePersona(id: $id, name: $name) {
          id
          name
        }
      }
    `,
  },
}
