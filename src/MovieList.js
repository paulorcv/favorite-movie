import React, {Component} from 'react'

class MovieList extends Component{
  
  render(){
    const movies = this.props.movies;
    const users = this.props.users;
    const profiles = this.props.profiles;
    
    const listOfMovies = Object.keys(movies).map(key=>{
     	let movie = movies[key];	
      	return <li key={movie.id}><p>{movie.name}</p></li> 
    });
    return <ul>{listOfMovies}</ul>;
  } 
}

export default MovieList