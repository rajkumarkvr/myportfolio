import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajkumar </span>
            from <span className="purple">Kottaivilaiur, Tenkasi.</span>
            <br />
            I am ZohoSchools student
            <br />
            I have completed diploma in Computer Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Consistent Learning of mathematics &
              logics
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Like to take seminars about any topic
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; I like to be with Nature
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If the WHY is powerfull,the HOW is easy."{" "}
          </p>
          <footer className="blockquote-footer">Jim Rohn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
