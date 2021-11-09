import React from "react";
import PostMain from "./post/PostMain";
import PostView from "./post/PostView";
import { BrowserRouter, Route } from "react-router-dom";

class Trading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 0,
    };
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/post/PostView/:no" component={PostView} />
          <Route exact path="/" component={PostMain} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Trading;
