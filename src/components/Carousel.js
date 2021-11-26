import React from "react";

import Card from "../components/Card";

import starwarsapi from "../assets/images/starwarsapi.JPG";
import weatherapp from "../assets/images/weatherapp.JPG";
import zalookup from "../assets/images/zalookup.JPG";
import { Container, Row } from "react-bootstrap";

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 0,
          title: "star wars ",
          subTitle: "Get Star Wars api ",
          imgSrc: starwarsapi,
          link: "https://star-wars-api-git-master-mahambabp.vercel.app/",
          selected: false,
        },
        {
          id: 1,
          title: "weatherapp",
          subTitle: "weather api",
          imgSrc: weatherapp,
          link: "https://dry-eyrie-15864.herokuapp.com/",
          selected: false,
        },
        {
          id: 2,
          title: "zalookup",
          subTitle: "find info on ZA cities",
          imgSrc: zalookup,
          link: "https://za-city-look-up.vercel.app/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
