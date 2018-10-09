import React, {Component} from 'react';

class UserList extends Component{

    render(){
        const users = this.props.users;
        const usersByMovie = this.props.usersByMovie;
        const movieID = this.props.movieID;
        let likers = {};
        if(!usersByMovie[movieID]){
            likers = <p>None of the current users liked this movie</p>;
        }else{
            likers = (
               <div>
               <p>Liked by:</p>
               <ul key={movieID}>
                   {Object.keys(usersByMovie[movieID]).map((key) => {
                    let userID = usersByMovie[movieID][key];   
                    const user = users[userID];
                    return (<li key={movieID+'_'+user.id}>{user.name}</li>)    
                   })}
                   
               </ul>
               </div>     
            );
        }
        
        return likers;
    }
}

export default UserList;