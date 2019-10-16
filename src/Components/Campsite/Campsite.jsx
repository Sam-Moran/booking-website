import React, { Component } from "react";
import { getCampsite } from "../../api";
import SiteImage from "../SiteImage/SiteImage";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import List from "../List/List";
import Calendar from "react-calendar";

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
    const {
      area,
      siteImg,
      postCode,
      description,
      pitches,
      activities,
      bookingsOpen,
      bookingsClose,
      loading
    } = this.state;
    if (loading) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div>
          <SiteImage siteImg={siteImg} />
          <Jumbotron fluid>
            <Container>
              <Col>
                <Row>
                  <h1>{area}</h1>
                </Row>
                <Row>
                  <h6>
                    <a
                      href={`https://www.google.co.uk/maps/place/` + postCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {postCode}
                    </a>
                  </h6>
                </Row>
                <Row>
                  <p>{description}</p>
                </Row>
                <Row>
                  <Col>
                    <List Type="Pitches" Info={pitches} />
                  </Col>
                  <Col>
                    <List Type="Activities" Info={activities} />
                  </Col>
                  <Col>
                    <Row>
                      <h6>Booking Calendar</h6>
                    </Row>
                    <Row>
                      <Calendar
                        value={new Date(bookingsOpen)}
                        minDate={new Date(bookingsOpen)}
                        maxDate={new Date(bookingsClose)}
                      />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Jumbotron>
        </div>
      );
    }
  }
  componentDidMount() {
    this.fetchCampsite();
  }

  componentDidUpdate(preProps) {
    const siteChanged = preProps.id !== this.props.id;

    if (siteChanged) this.fetchCampsite();
  }

  fetchCampsite = () => {
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
  };
}

export default Campsite;
