import React from "react";

function WorkHistory({ title, company, description, startDate, endDate }) {
  return (
    <div className="flex flex-col gap-y-1.5">
      <p>{title}</p>
      <span>{company}</span>
      <p>{description}</p>
      <p>
        {new Date(endDate).toLocaleDateString("fa")}-
        {new Date(startDate).toLocaleDateString("fa")}
      </p>
    </div>
  );
}

export default WorkHistory;
