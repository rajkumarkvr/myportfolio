import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { motion } from "framer-motion";

// Placeholder images (replace them later)
import battleship from "../../Assets/battleship.png";
import priorityQueue from "../../Assets/heapinsert.png";
import emailSystem from "../../Assets/emailsystem.png";
import auctionSystem from "../../Assets/auctionwebsite.webp";
import habitTracker from "../../Assets/habit-tracker.png";
import Gitgrove from "../../Assets/gitgrove.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.h1
          className="project-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <strong className="purple">Projects</strong>
        </motion.h1>

        <motion.p
          style={{ color: "white", textAlign: "center", fontSize: "1.2rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore some of the projects I've worked on. Click on the links to
          check them out!
        </motion.p>

        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gitgrove}
              isBlog={false}
              title="GitGrove (Java + React js)"
              description="Gitgrove is an intuitive and powerful code collaboration platform designed for developers to create, manage, and contribute to repositories seamlessly. With a focus on simplicity and efficiency, Gitgrove empowers users to share, review, and collaborate on code effortlessly."
              ghLink="https://github.com/rajkumarkvr/GitGrove_backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={priorityQueue}
              isBlog={false}
              title="Priority Queue (Java)"
              description="Implemented a priority queue in Java that efficiently manages task execution based on priority levels."
              ghLink="https://github.com/rajkumarkvr/PriorityQueue"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emailSystem}
              isBlog={false}
              title="Email System (Java & MySQL)"
              description="A simple email system that integrates with MySQL database for managing email communication."
              ghLink="https://github.com/rajkumarkvr/EmailSystem.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auctionSystem}
              isBlog={false}
              title="Auction System (HTML, CSS, JS)"
              description="An interactive live auction system built with frontend technologies. Users can participate in real-time bidding."
              demoLink="https://rajkumar-3891-8443.zcodeusers.in/LiveAuction/Assets/Pages/login.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={habitTracker}
              isBlog={false}
              title="Zoho Habit Tracker (HTML, CSS)"
              description="A habit-tracking that helps users track and maintain daily habits efficiently."
              demoLink="https://rajkumar-3891-8443.zcodeusers.in/ZohoHabitTracker/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battleship}
              isBlog={false}
              title="Battleship (Scratch)"
              description="A fun battleship game built using Scratch programming. Players can strategize and attack enemy ships in this interactive game."
              demoLink="https://scratch.mit.edu/projects/1044475159"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
