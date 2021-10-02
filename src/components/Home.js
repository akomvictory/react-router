import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



class Home extends Component{

    state = {
        posts: []
    }
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    
        this.setState({
            posts: res.data.slice(0,10)
        })

         console.log(res);
  })
  
}
 
render(){
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
            <li key={post.id}>
                <div className="collapsible-header">
                <i className="material-icons"></i>
               
                <Link to={'/' + post.id}>  
                {post.title}  &nbsp;&nbsp;
                <span className="new badge"> </span> 
                </Link>
                </div>
                <div className="collapsible-body"><p>{post.body}</p></div>
            </li>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          <ul class="collapsible">
          {postList}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home