import JobItem from "./JobItem";
import { useRecoilState } from "recoil";
import { jobsState } from "../atoms/jobsAtom";
import { useEffect, useState } from "react";
import JobService from "../utils/jobService";

function JobList() {
  const [filter, setFilter] = useRecoilState(jobsState);

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      let allJobs = await JobService.getAll();
      console.log(allJobs.data.data);
      setJobs(allJobs.data.data);
    };
    fetchJobs();
  }, []);
  return (
    <div className="">
      {jobs.map((job) => (
        <pre key={job.id}>{job.attributes.desc}</pre>
      ))}
      {/* {jobs.map((job) => (
        <JobItem
          key={job.id}
          id={job.id}
          position={job.data().position}
          category={job.data().category}
        />
      ))} */}
      <JobItem />
    </div>
  );
}

export default JobList;
