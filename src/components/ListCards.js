import React,{ Component } from 'react'
import Card from './Card'

class ListCards extends Component {
  render(){
    return (
      <div className="row">
        {this.props.films
          .filter(film => `${film.title} ${film.description}`.toUpperCase().indexOf(this.props.search.toUpperCase()) >= 0)
          .map(data => <Card key = {data.id}{...data}/>)}
      </div>
    )
  }
}

export default ListCards
