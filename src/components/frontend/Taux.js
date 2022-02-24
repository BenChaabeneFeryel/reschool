import React from 'react';

class Taux extends Component {
    constructor(props){
        super(props)
        this.state={ compteur : 0}
    }
    increment = () =>{
        this.setState( 
            { compteur : this.state.compteur + 1 } )
    }
    render(){
        return (
            <div >
                <h1>{this.state.compteur}</h1>                   
            </div>
        )
    }
}

export default Taux;
