import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card';

class Cursos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: []
    }
  }

  componentDidMount(){
    const url = 'https://mongo-crud-cr.herokuapp.com/devf/api/v1/cursos';
    axios.get(url)
      .then( curso => {
        console.log(curso);
        this.setState({cursos: curso.data})
      }).catch(err => console.log('fallo: ', err));
  }

  renderCards = () => {
    if(this.state.cursos.length > 0){
      const cardsLlenas = this.state.cursos.map(curso => {
        return <Card nombre={curso.nombre} descripcion={curso.descripcion} precio={curso.precio} />
      });
      return cardsLlenas;
    }
  }

  render() {
    console.log('curso', this.state.curso);
    
    if(this.state.cursos.length === 0){
      return ( 
        <p>Cargando curso...</p>
      );
    }else{
      return (
        <div className="row ml-5">
          {this.renderCards()}
        </div>
      );
    }
  }
}

export default Cursos;