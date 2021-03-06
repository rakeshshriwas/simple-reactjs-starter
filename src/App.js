import React,{Component} from "react";
// import {render} from "react-dom";

import { User } from './components/User';
import { Main } from './components/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "Max"
    };
  }

  changeUsername(newName) {
    this.setState({
      username: newName
    });
  }

  render() {
    return (
      <div className="container">
        <Main changeUsername={this.changeUsername.bind(this)} />
        <User username={this.state.username} />
      </div>
    );
  }

}

export default App;
