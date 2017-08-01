import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import api from '../../api';
import style from './Post.css';

class Post extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      user: props.user || null,
      comments: props.comments || null ,
    }
  }

  async componentDidMount(){
    if(!!this.state.user && !!this.state.comments) return this.setState({ loading: false })
    const [
      user,
      comments,
    ] = await Promise.all([
      !this.state.user ? api.users.getSingle(this.props.userId) : Promise.resolve(null),
      !this.state.comments ? api.posts.getComments(this.props.id) : Promise.resolve(null),
    ]);

    this.setState ({
      loading: false,
      user: user || this.state.user,
      comments: comments || this.state.comments,
    })
  }

  render(){
    return (
      <article id={`post-${this.props.id}`} className="post">
        <Link to={`/post/${this.props.id}`}>
          {this.props.title}
        </Link>
        <p className="body">{this.props.body}</p>
        {!this.state.loading && (
          <div className="meta">
            <Link to={`/user/${this.state.user.id}`}>
              {this.state.user.name}
            </Link>
            <span className="comments">Hey {this.state.comments.length} comentarios</span>
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