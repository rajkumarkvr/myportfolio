import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

function ProjectCards(props) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card className="project-card-view shadow-lg">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="Project preview"
          className="project-image"
        />
        <Card.Body className="text-center">
          <Card.Title className="fw-bold">{props.title}</Card.Title>
          <Card.Text className="project-description">
            {props.description}
          </Card.Text>

          <div className="d-flex justify-content-center">
            <Button variant="dark" href={props.ghLink} target="_blank">
              <BsGithub size={20} /> &nbsp;
              {props.isBlog ? "Read Blog" : "GitHub"}
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button
                variant="outline-primary"
                href={props.demoLink}
                target="_blank"
                className="ms-3"
              >
                <CgWebsite size={20} /> &nbsp; Live Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;
