import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="b-card-info" style={style}>
      <p className="b-card-title">{props.title}</p>
      <p className="b-card-sub-title">{props.subTitle}</p>
      <a
        className="btn btn-primary"
        href={props.link}
        target="blank"
        rel="noopener noreferrer"
      >
        View
      </a>
    </animated.div>
  );
}

export default CardInfo;
