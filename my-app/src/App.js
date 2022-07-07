import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ""
    };
  }

  onChange(e) {
    let files = e.target.files;
    console.warn("data file", files)

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => { 
      console.warn("file data ", e.target.result)
    }
  }
  render = () => {
    return (
    <div className="App" onSubmit={this.onFormSubmit}>
      <h1>Resume Uploader</h1>
      <input type="file" name="file" onChange={(e) => this.onChange(e)}/>
    </div>
    )
  };
}

export default App;
