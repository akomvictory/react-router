import React, { Component } from 'react';
import axios from 'axios'


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
            <li>
                <div className="collapsible-header">
                <i className="material-icons">filter_drama</i>
                {post.title}
                <span className="new badge" key={post.id}></span></div>
                <div className="collapsible-body"><p>{post.body}</p></div>
            </li>
           })
        ) : (
            <div className="center"> No post where found </div>
        )
        return(
            <div className="container">
                <ul className="collapsible">
                  
                    {postList}
                </ul>
            </div>
        )
    }
}

export default Home