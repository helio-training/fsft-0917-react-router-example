import React from 'react'

export default ({ match }) => (
  <div>
    <h1>Product: {match.params.id}</h1>
  </div>
)