import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Dev.full</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/subir-curso">Subir Curso</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Ver cursos</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;