import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{props.sdate+" - "+props.edate}</p>
        <p className="title is-4">{props.position}</p>
        <h1 className="subtitle is-6">{props.company}</h1>
        <p style={{ maxWidth: "35em" }}>{props.summary}</p>
        <p style={{ maxWidth: "35em" }}>{props.highlights}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
