import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../posts/containers/post';
import Loading from '../../shared/components/Loading';
import api from '../../api';

class Profile extends Component {
  constructor(props){
    super(props);

    this.state= {
      user: {},
      posts: [],
      loading: true,
    };
  }

  async componentDidMount(){
    const [
      user,
      posts
    ] = await Promise.all([
      api.users.getSingle(this.props.match.params.id),
      api.users.getPosts(this.props.match.params.id)
    ]);

    this.setState({
      user,
      posts,
      loading: false
    })
  }
  render() {
    if(this.state.loading) {
      return <Loading />
    }

    return (
      <section name="Home">
        <h2>Profile of {this.state.user.name}</h2>
        <fieldset>
          <legend>Basic info</legend>
          <input  type="email" value={this.state.user.email} disabled/>

          {this.state.user.address && (
              <fieldset>
                <legend>Address</legend>
                <address>
                  {this.state.user.address.street}
                  {this.state.user.address.suite}
                  {this.state.user.address.city}
                  {this.state.user.address.zipcode}
                </address>
              </fieldset>
            )}
          <section>
            {this.state.posts
              .map(post => (
                <Post 
                key={post.id} 
                user={this.state.user}
                {...post} />))}
          </section>
        </fieldset>
      </section>
    )
  }
}

export default Profile;
