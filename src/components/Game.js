import React from 'react'
import { connect } from 'react-redux'
import { Door } from './Door'
import { selectNumberOfGames } from '../actions/actions'
class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prizes: [],
      doors: []
    }
  }

  render() {
    return (
      <React.Fragment>
        <input
          ref='gameNumber'
          placeholder='how many games'
          name='game-number'
        />
        <button onClick={this.handleSubmit.bind(this)}>
          {' '}
          choose how many games
        </button>
        <Door />
      </React.Fragment>
    )
  }

  handleSubmit(event) {
    let input = this.refs.gameNumber
    if (!input.value.trim()) {
      return
    }
    this.props.selectNumberOfGames(input.value)
    console.log('haro')
    input.value = ''
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  selectNumberOfGames: number => {
    dispatch(selectNumberOfGames(number))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
