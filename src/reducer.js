import { CHOOSE_DOOR, SELECT_NUMBER_OF_GAMES } from './actions/types'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CHOOSE_DOOR:
      return Object.assign({}, state, {
        playerInitialDoorChoice: action.payload.doorNumber
      })
    case SELECT_NUMBER_OF_GAMES:
      return {
        numberOfGames: action.payload.numberOfGames
      }
    default:
      return state
  }
}

export default reducer
