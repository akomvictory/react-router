import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        post: null // we set the posts originally to be null so that when the component mount we set the id to be the posts data can be queried gotten from the route parameter id

    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(res => {
                this.setState({
                    post: res.data  // now the id will be set as the id from the route parameter
                })

                
            })
    }
    render(){
        const post = this.state.post ? (

            <li>
                <div className="collapsible-header">
                <i className="material-icons"></i>
              <h5>  {this.state.post.title}  </h5>
                </div>
              <p>  {this.state.post.body} </p>
            </li>

             
        ) : (
            <div className="center"> Loading post... </div>
        )
        return (
            <div className="container">
                <ul class="collapsible">
                { post }
                </ul>
            </div> 
        )
    }
}
export default Post