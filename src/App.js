import React, { Component } from 'react';
import Header from './components/Header'
import ListCards from './components/ListCards'

class App extends Component {

  state = {
    films : [],
    search:""
  }

  handleSearchTermChange = event => {
    this.setState({search:event.target.value})
  }

  componentDidMount(){
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(data => this.setState({films:data}))
  }


  render() {
    return (
      <div className="container">
        <Header handleSearchTermChange = {this.handleSearchTermChange} search={this.state.search}/>
        <br />
        <ListCards films = {this.state.films}
                  search = {this.state.search} />
      </div>
    );
  }
}

export default App;
