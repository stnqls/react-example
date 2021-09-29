import React from "react";
import PostMain from "./post/PostMain";

class Free extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 0,
    };
  }
  render() {
    return (
      <div>
        <PostMain />
      </div>
    );
  }
}

export default Free;
