import React, { Component } from 'react'
import './App.css';

class Search extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      searchTerm: "",
    };
  }

  onChange(e){
    console.log()
    this.setState({searchTerm: e.target.value})
    console.log(e.target.value)
  }
  render = () => {
    return (
      <div className='Search'>
        <input className="SearchBox" type="text" placeholder="Search..." onChange={(e) => this.onChange(e)}></input>
        <br />
        {/* <p>{this.props.list}</p> */}
        {this.props.list.filter((val) => {
          if(this.state.searchTerm == "") {
            return val
          } else if (val.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
            return val
          }
        }).map((line,index) => (
        <p key={index}>{line}</p>
        ))}
      </div>
    )
  }
}

export default Search;