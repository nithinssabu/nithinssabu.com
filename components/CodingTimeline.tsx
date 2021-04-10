import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

export default function CodingTimeline() {
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <strong>
            <a href="https://ecsfin.com">ECSFin</a> - Software Engineer
          </strong>
          <br />
          First professional experience as Full Stack Web Developer. Got trained
          in HTML5, CSS3, JavaScript, jQuery, Java, Servlets, Struts Framework,
          Oracle Database and Weblogic Server.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <strong>Bachelor's Degree</strong>
          <br />
          Did an introductory course in C++. Learned programming
          microcontrollers using C and Assembly. Made a GPS &amp; GSM based
          accident identification system using 8051 microcontroller.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <strong>11th/12th Grade</strong>
          <br />
          Learned Visual Basic. Implemented a "Paint Shop" store management
          software.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <strong>10th Grade</strong>
          <br />
          First Introduction to HTML &amp; CSS
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <strong>7th Grade</strong>
          <br />
          Wrote my first computer program in BASIC. Basically copied an addition
          program from my text book and modified it to perform subtraction,
          multiplication &amp; division.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
