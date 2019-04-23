import { CHOOSE_DOOR, SELECT_NUMBER_OF_GAMES } from './types'

export const chooseDoor = doorNumber => dispatch => {
  console.log('harro')
  dispatch({
    type: CHOOSE_DOOR,
    payload: {
      doorNumber: 5
    }
  })
}

export const selectNumberOfGames = numberOfGames => dispatch => {
  dispatch({
    type: SELECT_NUMBER_OF_GAMES,
    payload: {
      numberOfGames: numberOfGames
    }
  })
}
