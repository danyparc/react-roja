import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { }
  }
  
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
