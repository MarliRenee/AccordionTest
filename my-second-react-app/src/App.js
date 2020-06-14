import React, { Component } from 'react';
import './App.css';
import Accordion from './Accordion/Accordion'

const buttonSections = [
  {
    title: 'Button 1',
    content: 'This is my test button 1. It should display when clicked',
  },
  {
    title: 'Button 2',
    content: 'Wow. Another one. It also opens when clicks. The first button should have closed.',
  },
  {
    title: 'Button 3',
    content: 'You know the drill. Yada yada yada',
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion buttonSections={buttonSections} />
      </div>
    );
  }
}

export default App;