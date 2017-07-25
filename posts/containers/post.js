import React, {Component} from 'react';
import PropTypes from 'prop-types'
import api from '../../api';

class Post extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      user:{},
      comments: [],
    }
  }

  async componentDidMount(){
    const [
      user,
      comments,
    ] = await Promise.all([
      api.users.getSingle(this.props.userId),
      api.posts.getComments(this.props.id)
    ])
  }

  render(){
    return (
      <article id={`post-${this.props.id}`}>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        {this.state.loading && (
          <div>
          </div>
          )}
      </article>
    )
  }
}

Post.Proptypes = {
  id: PropTypes.number,
  user: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default Post;