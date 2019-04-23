import React from 'react'

export class Door extends React.Component {
    constructor(props,prize, index, playerChosen=false, hostChosen=false){
		super(props)
		this.state = {
	        index: null,
	        playerChosen:false,
	        hostChosen: false
  		}
    }


    

    render(){
    	return(
    		<div>
    		<p>"Door " {this.props.index}</p>
    		</div>
    		)
    }
}
