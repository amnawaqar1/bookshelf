import { render } from "@testing-library/react";
import axios from "axios";
import React, { Component } from "react";
import Jd from "./api";
class Cardlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8008/cards").then((response) => {
      this.setState({
        cards: response.data,
      });

      console.log(response.data);
    });
  }
  render() {
    const cards = this.state;

    return <Jd results={this.state.cards} />;
  }
}
export default Cardlist;
