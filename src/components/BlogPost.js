import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogPost extends Component {
  state = {
    post: {}
  };

  async componentDidMount() {
    const post = await this.loadData();
    this.setState({
      post
    });
  }

  loadData = async () => {
    const postId = this.props.match.params.id;
    const url = `http://localhost:3000/v1/post/${postId}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  handleDeleteClick = () => {
    const postId = this.props.match.params.id;
    const url = `http://localhost:3000/v1/post/delete/${postId}`;
    const response = fetch(url, {
      method: "DELETE"
    });
  };

  render() {
    const { post } = this.state;
    console.log("post", post);
    // console.log("post title", post[0].title);
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link to="/" onClick={this.handleDeleteClick}>
          Delete
        </Link>
      </div>
    );
  }
}

export default BlogPost;
