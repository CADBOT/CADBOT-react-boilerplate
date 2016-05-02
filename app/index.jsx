import React from 'react'
import {render} from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <main>
        <h1> Hello World! </h1>
      </main>
    )
  }
}

render(<App/>, document.getElementById('app'))
