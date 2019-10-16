import React, { Component } from "react";
import {
  Spinner,
  Image,
  Container,
  Row,
  Col,
  Button,
  Carousel
} from "react-bootstrap";
import { getCampsites } from "../../api.js";
import { Link } from "@reach/router";
import List from "../List/List.jsx";
import styles from "./Campsites.module.css";
import Hero from "../Hero/Hero.jsx";

class Campsites extends Component {
  state = {
    campsites: [],
    loading: true
  };
  render() {
    const { campsites, loading } = this.state;
    if (loading) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    } else {
      return (
        <div>
          <Hero campsites={campsites} />
          <ul className={styles.campsites}>
            {campsites.map(campsite => {
              const {
                id,
                area,
                siteImg,
                strap,
                pitches,
                activities
              } = campsite;
              return (
                <li key={id} className={styles.campsite}>
                  <h1>
                    <Link to={`/sites/${id}`}>{area}</Link>
                  </h1>
                  <Container>
                    <Row>
                      <Col md="auto">
                        <Link to={`/sites/${id}`}>
                          <Image
                            src={siteImg}
                            className={styles.image}
                            rounded
                          />
                        </Link>
                      </Col>
                      <Col>
                        <Col>
                          <Row>
                            <p>{strap}</p>
                          </Row>
                          <Row>
                            <List Type="Pitches" Info={pitches} />
                            <List Type="Activities" Info={activities} />
                          </Row>
                        </Col>
                      </Col>
                      <Col md="auto">
                        <Row>
                          <Link to={`/sites/${id}`}>
                            <Button variant="info">Read More</Button>
                          </Link>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }

  componentDidMount() {
    this.fetchCampsites();
  }
  fetchCampsites = () => {
    getCampsites(this.props.acitivity, this.props.pitch).then(campsites => {
      this.setState({ campsites, loading: false });
    });
  };
}

export default Campsites;
