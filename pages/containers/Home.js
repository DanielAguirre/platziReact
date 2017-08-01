import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from  '../../posts/containers/post.js';
import Loading from '../../shared/components/Loading';
import api from  '../../api';
import style from './Page.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      posts: [],
      loading: true,
    };
  }
  async componentDidMount() {
    const posts = await api.posts.getList(this.state.page);
    this.setState({
      posts,
      page: this.state.page + 1,
      loading: false,
    });
    this.handleScroll = this.handleScroll.bind(this);

    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll (event) {
    if (this.state.loading) return null;

    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.clientHeight;

    if (!(scrolled + viewportHeight + 300 >= fullHeight)){
      return null;
    }

    this.setState({ loading:true }, async () => {
      try {
        const post = await api.posts.getList(this.state.page);
        this.setState({
          posts: this.state.posts.concat(post),
          page: this.state.page +1,
          loading: false,
        });
      }catch(error) {
        console.error(error);
        this.setState({
          loading: true,
        });
      }
    });
  }
  render() {
    return (
      <section name="Home" className="section">
        <section className="list">
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
