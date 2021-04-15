import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TimelineElement = ({ title, subtitle, date, type, children }: any) => {
  return (
    <VerticalTimelineElement date={date}>
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      {children}
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
