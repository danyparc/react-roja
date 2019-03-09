import React, { Component } from 'react';

// Mostrar por medio de los props
// El nombre de su sensei, la edad, y su nacionalidad
// Bonus: si pasan un objeto sensei en los props
class Despedida extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sensei: {}
        };

    }

    getSensei = () =>{
        let sensei = {
            nombre: 'Gerardo',
            edad: 23,
            nacionalidad: 'MX'
          };
          this.setState({sensei});
        console.log('El sensei:', sensei);
    }

    render() { 
        return ( 
            <div>                
                <p>Tu sensei es: {this.state.sensei.nombre}</p>
                <button onClick={this.getSensei}>Dame mi sensei</button>
            </div>
        );
    }
}
 
export default Despedida;
