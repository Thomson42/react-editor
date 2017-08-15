import React, { Component } from 'react';
import './App.css';

const shortHeader = <h2>My Short Message</h2>;
const longHeader = <h1>My Message</h1>;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: props.initialMessage,
      color: '#4682b4',
      fontSize: props.initialFontSize,
      fontWeight: props.initialBoldType,
      fontStyle: props.initialStyle,
      textAlign: props.initialTextAlign,
      backgroundColor: '#ffffff'
    }
  }

  handleChange({ name, value }) {
    this.setState({ 
      [name]: value
    });
  }

  render() {

    //const header = this.state.message.length < 20 ? shortHeader : longHeader;
    const header = <h1>Welcome to React Editor</h1>

    return (
      <div>
        {header}
        <div>
          <label>
            Message:
            <input className="display" name="message" value={this.state.message} 
              onChange={({ target }) => this.handleChange(target)}/>
          </label>
          <label>
            Color:
            <input name="color" value={this.state.color} type="color" 
              onChange={({ target }) => this.handleChange(target)}/>
          </label>
        </div>
          <label>
            Font-Size:
            <input  className="display" name="fontSize"  value={this.state.fontSize} 
            type="number" onChange={({ target }) => this.handleChange(target)}/>
            </label>
            <label>
            Bold:
            <input className="display" name="fontWeight"  
            value= {this.state.fontWeight == "bold" ? "normal" :  "bold"}
            type="checkbox"onChange={({ target }) => this.handleChange(target)}/>
            </label>
            <label>
            Styles:
            <input list="Styles" className="display" name="fontStyle"  
            onChange={({ target }) => this.handleChange(target)}/>
            <datalist id="Styles">
              <option value="normal"onChange={({ target }) => this.handleChange(target)}/>
              <option value="italic"onChange={({ target }) => this.handleChange(target)}/>
              <option value="oblique"onChange={({ target }) => this.handleChange(target)}/>
              </datalist>
            </label>
            <label>
            Alignment:
            <input list="Alignments" className="display" name="textAlign"  
            onChange={({ target }) => this.handleChange(target)}/>
            <datalist id="Alignments">
              <option value="left"onChange={({ target }) => this.handleChange(target)}/>
              <option value="center"onChange={({ target }) => this.handleChange(target)}/>
              <option value="right"onChange={({ target }) => this.handleChange(target)}/>
              </datalist>
            </label>
            <label>
            Background Color:
            <input name="backgroundColor" value={this.state.backgroundColor} type="color" 
              onChange={({ target }) => this.handleChange(target)}/>
          </label>
        <div className="display" style={{
          color: this.state.color,
          fontSize: this.state.fontSize,
          fontWeight: this.state.fontWeight,
          fontStyle: this.state.fontStyle,
          textAlign: this.state.textAlign,
          backgroundColor: this.state.backgroundColor
        }}>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default App;