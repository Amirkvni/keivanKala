import React from "react";

function WorkHistory({ title, company, description, startDate, endDate }) {
  return (
    <div>
      <p>{title}</p>
      <span>{company}</span>
      <p>{description}</p>
      <p>
        {new Date(startDate).toLocaleDateString("fa")}-
        {new Date(endDate).toLocaleDateString("fa")}
      </p>
    </div>
  );
}

export default WorkHistory;
