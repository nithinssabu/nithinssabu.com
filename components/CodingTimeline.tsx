import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function CodingTimeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - Present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Diebold Nixdorf - Software Engineer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Paderborn, Germany
        </h4>
        <p>PHP, React, Java Spring, MySQL, Docker, Jenkins</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2016 - 2019"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          MSc Computer Engineering
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Master's Degree</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2014 - 2016"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          ECSFin - Software Engineer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Thiruvananthapuram, India
        </h4>
        <p>
          First professional experience as Full Stack Web Developer. Got trained
          in HTML5, CSS3, JavaScript, jQuery, Java, Servlets, Struts Framework,
          Oracle Database and Weblogic Server.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2008 - 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          B Tech - Electronics &amp; Communication Engineering
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Bachelor's Degree
        </h4>
        <p>
          Did an introductory course in C++. Learned programming
          microcontrollers using C and Assembly. Made a GPS &amp; GSM based
          accident identification system using 8051 microcontroller.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2006 - 2008"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">11th/12th Grade</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Senior Secondary School
        </h4>
        <p>
          Learned Visual Basic. Implemented a "Paint Shop" store management
          software.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2005"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Tenth Grade</h3>
        <h4 className="vertical-timeline-element-subtitle">Secondary School</h4>
        <p>First Introduction to HTML &amp; CSS</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Seventh Grade</h3>
        <h4 className="vertical-timeline-element-subtitle">Secondary School</h4>
        <p>
          Wrote my first computer program in BASIC. Basically copied an addition
          program from my text book and modified it to perform subtraction,
          multiplication &amp; division.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}
