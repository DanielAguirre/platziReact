import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostBody from '../../posts/containers/post';
import Loading from '../../shared/components/Loading';
import Coment from '../../comments/components/Comment';
import api from '../../api';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      user: {},
      post: {},
      comments: [],
    };
  }

  async componentDidMount() {
    const [
      post,
      comments,
    ] = await Promise.all([
      api.posts.getSingle(this.props.match.params.id),
      api.posts.getComments(this.props.match.params.id)
    ]);

    const user = await api.users.getSingle(post.userId);
    console.log('post', post);
    this.setState({
      loading: false,
      post,
      user,
      comments
    })
  }

  render() {
    console.log(this.state)
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <section name="Home">
        <PostBody 
          {...this.state.post}
          user={this.state.user}
          comments={this.state.comments}
        />
        <section>
          {this.state.comments
              .map(comment => <Coment key={comment.id} {...comment} />)}
        </section>
      </section>
      )
  }
}

export default Post;
