import React from 'react'


const Header = (props) => {
    return(
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Ghibli Fans Site</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
          <form className="form-inline my-2 my-lg-0">
          {
            props.id ? "" : <input className="form-control mr-sm-2" type="text" onInput = {props.handleSearchTermChange} value={props.search} placeholder="search"></input>
          }
          </form>
        </div>
      </nav>
    )
}


export default Header
