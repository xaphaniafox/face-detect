import './App.css';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value)
  }
  onClickSubmit = () => {
    console.log('click');
  }
  render() {
    return (
      <div className="App">
        <Navigation  />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onClickSubmit={this.onClickSubmit} 
        />
      </div>
    );
  }
}

export default App;
