import React, { Component } from 'react';

export default class Saludo extends Component {

    constructor(props){
        super(props);
        
        console.log('constructor');
        
        this.state = {
            mensaje: 'Hola',
        }
    }

    render(){
        console.log('render');
        
        return (
            <div className="saludo">
                <h2>{this.state.mensaje}</h2>
                <p>Mi nombre es {this.props.minombre}</p>
                <p>Mi edad es {this.props.edad + 2 }</p>
            </div>
        )
    } 

    componentDidMount(){
        this.setState({mensaje: 'que px'});
        console.log('En did mount');
    }

    componentDidUpdate(){
        console.log('En did update');
    }

    componentWillUnmount(){
        console.log('En will unmount');
    }


}