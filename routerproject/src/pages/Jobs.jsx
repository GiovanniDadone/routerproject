import React from "react";
import { Link, useLoaderData } from "react-router-dom";
const Jobs = () => {
  const jobsData = useLoaderData();
  return (
    <div className="jobs">
      {jobsData.map((jobs) => {
        return (
          <Link>
            <h4>{jobs.title}</h4>
            <p>{jobs.salary}</p>
            <p>{jobs.location}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default Jobs;

export const jobsLoader = async () => {
  const res = await fetch("http://localhost:3000/jobs");
  return res.json();
};
