import React, {Component} from 'react'

class MovieList extends Component{
  
  render(){
    const movies = this.props.movies;
    const users = this.props.users;
    const usersByMovie = this.props.usersByMovie;
    
    const listOfMovies = Object.keys(movies).map(id =>{
        let movie = movies[id];
        return <h2 key={id}>{movie.name}</h2>;
    });

    return listOfMovies;
    
  } 
}

export default MovieList