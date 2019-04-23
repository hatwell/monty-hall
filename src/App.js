import React, { Component } from 'react'
import { connect } from 'react-redux'
import Game from './components/Game'
import { chooseDoor } from './actions/actions.js'
import './App.css'

class App extends Component {
  onClickButton = event => {
    this.props.chooseDoor()
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Game />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <button onClick={this.onClickButton}>Test redux action</button>
        </header>

        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  chooseDoor: () => dispatch(chooseDoor())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
