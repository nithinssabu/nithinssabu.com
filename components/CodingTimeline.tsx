import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { DiJsBadge } from "react-icons/di";
import Grid from "@material-ui/core/Grid";
import TimelineElement from "./TimelineElement";

export default function CodingTimeline() {
  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={3}>
        <DiJsBadge size="4em" color="rgb(240, 219, 79);" />
      </Grid> */}
      <Grid item xs={9} style={{ background: "beige" }}>
        <VerticalTimeline layout="1-column">
          <TimelineElement
            title="Diebold Nixdorf - Software Engineer"
            subtitle="Paderborn, Germany"
            date="Aug 2017 - Present"
            type="work"
          >
            <p>PHP, React, Java Spring, MySQL, Docker, Jenkins</p>
          </TimelineElement>
          <TimelineElement
            title="MSc Computer Engineering"
            subtitle="Master's Degree"
            date="Oct 2016 - Sep 2019"
            type="academic"
          >
            <p></p>
          </TimelineElement>
          <TimelineElement
            title="ECSFin - Software Engineer"
            subtitle="Thiruvananthapuram, India"
            date="Jan 2014 - Sep 2016"
            type="work"
          >
            <p>
              First professional experience as Full Stack Web Developer. Got
              trained in HTML5, CSS3, JavaScript, jQuery, Java, Servlets, Struts
              Framework, Oracle Database and Weblogic Server.
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
      </Grid>
    </Grid>
  );
}
