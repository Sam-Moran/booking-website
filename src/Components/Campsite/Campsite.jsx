import React, { Component } from "react";
import styles from "./Campsite.module.css";
import { getCampsite } from "../../api";

class Campsite extends Component {
  state = {
    area: "",
    activities: [],
    description: "",
    pitches: [],
    bookingsOpen: "",
    bookingsClose: "",
    postCode: "",
    siteImg: "",
    loading: true
  };
  render() {
    const { area } = this.state;
    return (
      <div>
        <h1>{area}</h1>
      </div>
    );
  }
  componentDidMount() {
    getCampsite(this.props.id).then(
      ({
        area,
        activities,
        description,
        pitches,
        bookingsOpen,
        bookingsClose,
        postCode,
        siteImg
      }) => {
        this.setState({
          area,
          activities,
          description,
          pitches,
          bookingsOpen,
          bookingsClose,
          postCode,
          siteImg,
          loading: false
        });
      }
    );
  }
}

export default Campsite;
