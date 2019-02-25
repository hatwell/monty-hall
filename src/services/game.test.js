import Game from './game'

describe('game mechanism', ()=> {

    it('a game can have as many doors as the player chooses', ()=>{
        const game = new Game()
        game.setNumberOfDoors(4)
        expect(game.numberOfDoors).toBe(4)
        expect(game.doors.length).toBe(4)
    })

    it('allows a player to pick a door', () => {
        const game = new Game()
        game.setNumberOfDoors()
        game.playerChoosesInitialDoor(1)
        expect(game.doors[1].playerChosen).toBe(true)
    })
    
    it('host picks a door that does not have a car', ()=>{
        const game = new Game()
        game.setNumberOfDoors() 
        game.playerChoosesInitialDoor(1)
        game.hostChooses()
        const hostChoice = game.doors.filter((x) => x.hostChosen === true)
        expect(hostChoice[0].prize).toEqual('Goat')
    })
    
    it('host picks a door that does was not picked by the player', () =>{
        const game = new Game()
        game.setNumberOfDoors()
        game.playerChoosesInitialDoor(1)
        game.hostChooses()
        expect(game.doors[0].hostChosen).toBe(false)
    })
    
    it('host discerns does not return an empty array', () =>{
        const game = new Game()
        game.setNumberOfDoors() 
        game.playerChoosesInitialDoor(1)
        const doorsLeft = game.hostDiscerns()
        expect(doorsLeft.length > 0).toBe(true)
    })
    
    it('player can switch and their first choice is unchosen', () => {
        const game = new Game()
        game.setNumberOfDoors()
        game.playerChoosesInitialDoor(1)
        game.hostChooses()
        const playersFirstChoice = game.doors.filter((x) => x.playerChosen === true)[0]
        game.playerSwitches()
        expect(playersFirstChoice.playerChosen).toBe(false)
        expect(game.doors.filter((x) => x.playerChosen === true).length > 0).toBe(true)
    })
    
    it('once a player picks a number of doors there are that many doors', () => {
        const game = new Game()
        game.setNumberOfDoors(6)
        expect(game.numberOfDoors).toEqual(6)
    })

    it('if a player has chosen a car, they win', () =>{

    })

    it('if a player has chosen a goat, they do not win', () =>{

    })


})