import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Post from  '../../posts/containers/post.js';
import Loading from '../../shared/components/Loading';
import api from  '../../api';

class Home  extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 1,
      posts: [],
      loading: true,
    }
  }
  async componentDidMount() {
    const posts = await api.posts.getList(this.state.page)
    this.setState({ 
      posts,
      page: this.state.page + 1,
      loading: false,  
    });
  }

  render(){
    return (
      <section name="Home">
        <h1>Home</h1>
        <section>
          { this.state.loading && (
            <Loading />
          )}
          {this.state.posts
            .map(post => <Post key={post.id} {...post} />)}
        </section>
        <Link to="/about">Go to about</Link>
      </section>
    );
  }
}

export default Home;