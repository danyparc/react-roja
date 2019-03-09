import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      descripcion: '',
      precio: 0
    }
  }

  onInputChange = (event) => {
    // const id = event.target.id;
    // const value = event.target.value;
    const {id, value} = event.target;
    this.setState({[id]: value});
    // switch (target.id) {
    //   case 'nombre':
    //     this.setState({nombre: target.value});
    //     break;
    //   case 'descripcion':
    //     this.setState({descripcion: target.value});
    //     break;
    //   case 'precio':
    //     this.setState({precio: target.value});
    //   default:
    //     break;
    // }

  }

  render() {
    return (
      <div>
        <h1>Nuevo curso</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input onChange={this.onInputChange} type="text" placeholder="Nombre del curso" name="nombre" id="nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea onChange={this.onInputChange} placeholder="De que va tu curso..." id="descripcion" name="descripcion" />
          </div>
          <div className="form-group">
            <label htmlFor="precio"></label>
            <input onChange={this.onInputChange} placeholder="$0.0" type="number" name="precio" id="precio" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Crear curso</button>
          </div>
        </form>

        <p>Nombre: {this.state.nombre}</p>
        <p>Descripcion: {this.state.descripcion}</p>
        <p>Precio: {this.state.precio}</p>
      </div>
    );
  }
}

export default Form;