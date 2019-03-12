import React, { Component } from 'react'
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="card" style={{ width: '250px' }}>
        <img src="https://loremflickr.com/320/240" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.nombre}</h5>
          <p className="card-text">{this.props.descripcion}</p>
          <p className="card-text">${this.props.precio}</p>
        </div>
      </div>
    );
  }
}

export default Card;