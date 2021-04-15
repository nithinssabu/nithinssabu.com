import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";

const TimeLineElement = ({ title, subtitle, date, type, children }: any) => {
  const getIcon = (type: String) => {
    if (type === "work") return <WorkIcon />;
    else if (type === "academic") return <SchoolIcon />;
    else return <StarIcon />;
  };
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{
        background: `${
          type === "work" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)"
        }`,
        color: "#fff",
      }}
      icon={getIcon(type)}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      {children}
    </VerticalTimelineElement>
  );
};

export default TimeLineElement;
