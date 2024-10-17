import React from "react";
import { Link, useLoaderData } from "react-router-dom";
const Jobs = () => {
  const jobsData = useLoaderData();
  return (
    <div className="jobs">
      {jobsData.map((jobs) => {
        return (
          <Link to={jobs.id.toString()} key={jobs.id}>
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
    if (!res.ok) {
        throw Error("Could not find jobs list");
      }
  return res.json();
};
