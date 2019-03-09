import React, { Component } from 'react';
import './App.css';
import Saludo from './components/Saludo';
import Despedida from './components/Despedida';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { }
  }
  
  render() {
    return (
      <div className="App">
        <Saludo minombre="Dany" edad={24} />
        <Despedida />
      </div>
    );
  }
}

export default App;
