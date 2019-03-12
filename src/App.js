import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Cursos from './components/Cursos';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { }
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Cursos}/>
          <Route exact path="/subir-curso" component={Form} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
