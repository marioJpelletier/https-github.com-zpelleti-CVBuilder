import './App.css';
import React, {Component} from 'react';
import Instructions from './components/instructions';
import Resume from './components/resume';
//import "./styles/styles.css";

class App extends Component {
  render(){

    return (
      <div className="App">
          <Instructions/>
          <Resume/>
  
      </div>
    )
  }
  
}

export default App;
