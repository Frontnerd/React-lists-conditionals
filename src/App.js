import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {

  state = {
    value: 0,
    enough: "",
    firstLetter: []
  }

  getStringLengthHandler = ( event ) => {
    // get length
    let rangeMessage;
    const rangeLimit = 5;

    // make condition and diplay short/long warnings
    if (event.target.value.length < rangeLimit) {
      rangeMessage = "Text too short"
    } else {
      rangeMessage = "Text long enough"
    }


    // get stringLength
    // get warning message
    // create array with single letters
    this.setState({
      value: event.target.value.length,
      enough: rangeMessage,
      firstLetter: [...event.target.value],
    });
  }


  removeCharacterHandler = ( index ) => {
    const text = this.state.firstLetter;
    text.splice(index, 1);
    const newText = text.join('');

    this.setState({
      value: newText
    });
  }


  render() {

    // make array of letters and create a list out of it
    let charBoxes = (
      <div>
        {
          this.state.firstLetter.map( ( letter, index ) => {
            return (
              <CharComponent
                fl={this.state.firstLetter[index]}
                key={index}
                clicked={() => this.removeCharacterHandler( index )} />
            )
          })
        }
      </div>
    )





    return (
      <div className="App">

        <input
          type="text"
          onChange={this.getStringLengthHandler} />
        <ValidationComponent
          stringLength={this.state.value}
          outOfRange={this.state.enough}/>
        {/* Render a list of CharComponents where each
          CharComponent receives a different letter
          of the entered text (in the initial input field) as a prop.
        <CharComponent fl={this.state.firstLetter}/>
        <CharComponent fl={this.state.firstLetter}/>
        <CharComponent fl={this.state.firstLetter}/>*/}
        {charBoxes}
        <hr />
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
