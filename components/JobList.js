import JobItem from "./JobItem";
import { useRecoilState } from "recoil";
import { jobsState } from "../atoms/jobsAtom";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

function JobList() {
  const [filter, setFilter] = useRecoilState(jobsState);

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "jobs"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setJobs(snapshot.docs);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db]);
  return (
    <div className="">
      <pre>{filter}</pre>
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          id={job.id}
          position={job.data().position}
          category={job.data().category}
        />
      ))}
      <JobItem />
    </div>
  );
}

export default JobList;
