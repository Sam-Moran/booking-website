import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import styles from "./List.module.css";

const List = ({ Info, Type }) => {
  return (
    <div>
      <ListGroup variant="flush">
        <ListGroupItem variant="success">{Type}</ListGroupItem>
        {Info.map(info => {
          return (
            <ListGroupItem key={info} className={styles.list}>
              {info}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default List;
