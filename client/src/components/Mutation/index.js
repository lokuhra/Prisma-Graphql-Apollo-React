import React from 'react'
import { Mutation } from 'react-apollo'
import queries from '../../utils/queries'
import { Button, ButtonIcon } from 'rmwc'

const UpdatePersona = props => (
  <Mutation mutation={queries.mutation.UPDATE_PERSON}>
    {(updateTodo, { loading, error }) => (
      <div>
        <button
          onClick={() =>
            updateTodo({ variables: { id: props.id, name: props.name } })
          }
        >
          asd
        </button>
        <Button>Default</Button>
        <Button>
          <ButtonIcon icon="favorite" /> With Icon
        </Button>
        <Button raised>Raised</Button>
        {loading && <p>Loading...</p>}
        {error && <p>Error :( Please try again</p>}
      </div>
    )}
  </Mutation>
)

export default UpdatePersona
