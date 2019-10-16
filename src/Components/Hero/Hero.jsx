import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Hero.module.css";
import { Link } from "@reach/router";

const Hero = ({ campsites }) => {
  return (
    <div>
      <Carousel>
        {campsites.map(campsite => {
          const { id, area, siteImg, strap } = campsite;
          return (
            <Carousel.Item key={id}>
              <Link to={`/sites/${id}`}>
                <div className={styles.hero}>
                  <img className="d-block w-100" src={siteImg} alt={area} />
                </div>
                <Carousel.Caption>
                  <div className={styles.cartext}>
                    <h3>{area}</h3>
                    <p>{strap}</p>
                  </div>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
