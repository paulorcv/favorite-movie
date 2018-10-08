import React, {Component} from 'react'
import UserList from './UserList'

class MovieCard extends Component{
  
  render(){
    const movies = this.props.movies;
    const users = this.props.users;
    const usersByMovie = this.props.usersByMovie;
    
    return (
       Object.keys(usersByMovie).map((key)=>{
        return(
          <div key={key}>
            <h2>{movies[key].name}</h2>
            <UserList users={users} usersByMovie={usersByMovie} movieID={key}/>
          </div>
        )
       })
    
    )

  } 
}

export default MovieCard