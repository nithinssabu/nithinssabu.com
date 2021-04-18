import { VerticalTimelineElement } from "react-vertical-timeline-component";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

const TimelineElement = ({ title, subtitle, date, type, children }: any) => {
  let icon;
  if (type === "academic") {
    icon = <SchoolIcon />;
  } else if (type === "work") {
    icon = <WorkIcon />;
  }
  return (
    <VerticalTimelineElement date={date} icon={icon}>
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      {children}
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
