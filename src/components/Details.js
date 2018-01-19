import React,{ Component } from 'react'
import Header from './Header'

class Details extends Component {

  state = {
    film : []
  }

  componentDidMount(){
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(data => this.setState({film:data}))
  }

  render(){
    return (
      <div className="container">
        <Header id = {this.props.match.params.id}/>
        <hr />
        <div className="card mb-3">
  <img className="card-img-top" src="..." alt="Card image cap"></img>
  <div className="card-block">
    <h4 className="card-title">{this.state.film.title}</h4>
    <p className="card-text">Director: {this.state.film.director}</p>
    <p className="card-text">Producer: {this.state.film.producer}</p>
    <p className="card-text">Release date: {this.state.film.release_date}</p>
    <p className="card-text">Rating: {this.state.film.rt_score}</p>
    <p className="card-text">{this.state.film.description}</p>
  </div>
</div>
      </div>
    )
  }
}

export default Details
