import {shuffle} from './helpers'
import {Door} from './door'

export default class Game {

	constructor(numberOfDoors){
	    this.numberOfDoors = numberOfDoors || 3 ,
		this.prizes = [],
	    this.doors =[]
	    }
	

	setNumberOfDoors(number=3) {
	    this.numberOfDoors = number
		this.createPrizes()
	    this.createDoors()
	}


	createPrizes() {
	    const prizeArray = ['Car']
	    for (let i = 0; i < this.numberOfDoors-1; i++){
	        prizeArray.push('Goat')
	    }
	    shuffle(prizeArray)
	    this.prizes = prizeArray
	}

	createDoors(){
		const doorsArray = []
	    this.prizes.forEach((prize, index) => {
	        doorsArray.push(new Door(prize, index, false, false))
	    })
	    this.doors = doorsArray
	}

	playerChoosesInitialDoor(playerChoice){
	    this.doors[playerChoice].playerChosen = true
	}


	hostDiscerns(){
	    return this.doors.filter((x) => x.prize === 'Goat' && x.playerChosen === false)
	}


	hostChooses(){
	    const hostsOptions = this.hostDiscerns()
	    const hostsPick = (hostsOptions.length === 1 ) ? hostsOptions[0] : hostsOptions[Math.random < 0.5 ? 1 : 0]
	    hostsPick.hostChosen = true
	}


	playerSwitches(){
	    const playersChoice = this.doors.filter((x) => x.playerChosen === true)[0]
	    const playersOtherOption = this.doors.filter((x) => x.playerChosen === false && x.hostChosen === false)[0]
	    playersChoice.playerChosen = false
	    playersOtherOption.playerChosen = true
	}
}
