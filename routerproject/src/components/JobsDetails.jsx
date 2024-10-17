import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const JobsDetails = () => {
    const jobsDetailsLoader = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className="jobs-return">
            <div className="jobs-details">
        <p><b>Job Title: </b>{jobsDetailsLoader.title}</p>
        <p><b>Job Salary: </b>{jobsDetailsLoader.salary}</p>
        <p><b>Job Location: </b>{jobsDetailsLoader.location}</p>
            <p><b>Job Description: </b>Voluptatem non cum sapiente. Dolore nemo eum eveniet quas sit
                temporibus voluptates. Perspiciatis quisquam et officia velit. Eos illum quia occaecati
                non est dolorem optio architecto. Temporibus mollitia amet ut laborum.</p>
                <button>Apply</button>
            </div>
            <button onClick={() => navigate('/jobs')}>Go to Jobs</button>
            </div>
    )
};
export default JobsDetails;

export const jobsDetailsLoader = async ({ params }) => {
  const { id } = params;
    const res = await fetch("http://localhost:3000/jobs/" + id);
    if (!res.ok) {
      throw Error("Could not find jobs details");
    }
  return res.json();
};
