import './App.css';
import React, { Component } from 'react'
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      fileContent: [],
    };
  }

  onChange(e) {
    let files = e.target.files[0];
    // console.warn("data file", files)

    let reader = new FileReader();
    reader.readAsText(files);

    reader.onload = (e) => { 
      // console.warn("file data ", e.target.result)
      const file = e.target.result;
      const lines = reader.result.split(/\r\n|\n/);
      // console.log(reader.result)
      this.setState({fileName: files.name, fileContent: lines})
    }
    
    reader.onerror = () => {
      console.log("file error: could not read file", reader.error)
    }
  }

  // body_contents(){
  //   let arr = []
  //   for (let i = 0; i < this.state.lines; i++){
  //     {<p>{this.fileContent[i]}</p>}
  //   }
  // }
  render = () => {
    return (
    <div className="App" onSubmit={this.onFormSubmit}>
      <h1>Resume Uploader</h1>
      <input type="file" name="file" onChange={(e) => this.onChange(e)}/>
      <p>{this.state.fileName}</p>
      <Search list={this.state.fileContent}/>
      <br/>
      {/* {this.state.fileContent?.map((line,index) => (
        <p key={index}>{line}</p>
      ))} */}
    </div>
    )
  };
}

export default App;
