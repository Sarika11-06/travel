import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
library.add(faLocationDot);

const Body = (props) => {
  return (
    <div className="cards">
      <div class="card card1">

        {/* Image containers */}
        <div className="container">
          <img
            src={props.image}
            alt="MountFuji"
            className="body--img"
          />
        </div>

        {/* Details On Right */}
        <div className="details">

          <div className="flex">
            <FontAwesomeIcon
              icon="fa-solid fa-location-dot"
              />
            <p className="body--location">{props.location}</p>
            <a
              href={props.Google_Maps}
              className="body--maps"
              target="_blank"
              >
              View on Google Maps
            </a>
          </div>
          <h1 className="body--name">{props.title}</h1>
          <h5 className="body--h5">{props.start_date} - {props.end_date}</h5>
          <p className="body--content">{props.description}</p>
          <hr />
          </div>
      </div>
    </div>
  );
};
export default Body;  