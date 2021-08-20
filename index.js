import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import Header from "./Header";
import Jd from "./api";
import Cardlist from "./search";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8008/cards").then((response) => {
      this.setState({
        card: response.data,
      });

      console.log(response.data);
    });
  }
  render() {
    const card = this.state;

    return <Header result={this.state.card} />;
  }
}

const Ap = () => {};

ReactDOM.render(<App />, document.querySelector("#root"));
