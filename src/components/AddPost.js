import React, { Component } from "react";

class AddPost extends Component {
  state = {
    title: "",
    content: "",
    author_id: 1
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleContentChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = () => {
    const url = "http://localhost:3000/v1/post/add";
    const formData = this.state;
    console.log("Form Data:", formData);
    const response = fetch(url, {
      method: "POST",
      body: JSON.stringify(formData)
    });
  };

  render() {
    return (
      <div>
        <h2>Add A Post:</h2>
        <span>Title:</span>
        <span>
          <input
            onChange={this.handleTitleChange}
            value={this.state.title}
            type="text"
          />
        </span>
        <span>Content:</span>
        <span>
          <input
            onChange={this.handleContentChange}
            value={this.state.content}
            type="text"
          />
        </span>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default AddPost;
