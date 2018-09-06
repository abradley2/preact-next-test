import { Component } from 'preact'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  render () {
    return (<div>
      <button onClick={() => this.setState({ count: this.state.count - 1 })}>
        --
      </button>
      {this.state.count}
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        ++
      </button>
    </div>)
  }
}
