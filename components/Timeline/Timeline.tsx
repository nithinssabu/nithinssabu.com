import { VerticalTimeline } from "react-vertical-timeline-component";
import { Container } from "@material-ui/core";
import TimelineElement from "./TimelineElement";
import styles from "../../styles/Home.module.css";

const Timeline = () => {
  return (
    <>
      <Container className={styles.timelineTitle}>
        Programming Experience
      </Container>
      <VerticalTimeline layout="1-column">
        <TimelineElement
          title="Diebold Nixdorf - Software Engineer"
          subtitle="Paderborn, Germany"
          date="Aug 2017 - Present"
          type="work"
        >
          <p>
            Was responsible for improving &amp; maintaining a legacy web
            application built using PHP &amp; MySQL. Later became part of the
            team that rebuilt this application using React &amp; Spring.
            Currently responsible for maintaining &amp; enhancing the
            application. Works across the full stack including UI design &amp;
            development (React, Redux), backend development (Spring Boot),
            database (MySQL) and testing automation (Jest, React Testing
            Library, Cypress, JUnit, Selenium). Developed &amp; maintains the
            build pipelines for the application using Jenkins &amp; Docker.
          </p>
        </TimelineElement>
        <TimelineElement
          title="MSc Computer Engineering"
          subtitle="Master's Degree"
          date="Oct 2016 - Sep 2019"
          type="academic"
        >
          <p>
            Did a course on Reconfigurable Computing and gained some experience
            programming FPGAs. Did a 1 year long project group where we built a
            self-driving car using hardware/software codesign to demonstrate the
            effects of hardware trojans. Parts of the system were implemented
            using custom hardware programmed on FPGAs (Verilog &amp; Vivado HLS)
            and the rest were implemented using software programmed on embedded
            ARM processors (C), microcontrollers (Arduino) and soft processor
            cores (C). Did a course on high-performance computing and gained
            experience programming parallel computer systems using different
            models &amp; frameworks (MPI, Pthreads, OpenMP). For Master's
            Thesis, built a C++ software implementation for a novel algorithm
            for fast search and compression of genome sequences and evaluated
            the possibility for accelerating the algorithm using hardware.
          </p>
        </TimelineElement>
        <TimelineElement
          title="ECSFin - Software Engineer"
          subtitle="Thiruvananthapuram, India"
          date="Jan 2014 - Sep 2016"
          type="work"
        >
          <p>
            First professional experience as a Full Stack Web Developer. Got
            trained in HTML5, CSS3, JavaScript, jQuery, Java, JSP, Servlets,
            Struts Framework, Oracle Database and WebLogic Server. Developed web
            applications used in the finance domain, wrote Java libraries for
            transformation &amp; parsing of messages used in wire transfers,
            developed desktop applications using Java Swing and developed
            prototypes using HTML/CSS/JavaScript/jQuery.
          </p>
        </TimelineElement>
        <TimelineElement
          title="B Tech - Electronics &amp; Communication Engineering"
          subtitle="Bachelor's Degree"
          date="2008 - 2013"
          type="academic"
        >
          <p>
            Did an introductory course in C++. Learned programming
            microcontrollers using C and Assembly. Made a GPS &amp; GSM based
            accident identification system using 8051 microcontroller.
          </p>
        </TimelineElement>
        <TimelineElement
          title="11th/12th Grade"
          subtitle="Senior Secondary School"
          date="2006 - 2008"
          type="academic"
        >
          <p>
            Learned Visual Basic. Implemented a "Paint Shop" store management
            software.
          </p>
        </TimelineElement>
        <TimelineElement
          title="Tenth Grade"
          subtitle="Secondary School"
          date="2005"
          type="academic"
        >
          <p>First Introduction to HTML &amp; CSS</p>
        </TimelineElement>
        <TimelineElement
          title="Seventh Grade"
          subtitle="Secondary School"
          date="2002"
          type="academic"
        >
          <p>
            Wrote my first computer program in BASIC. Basically copied an
            addition program from my text book and modified it to perform
            subtraction, multiplication &amp; division.
          </p>
        </TimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
