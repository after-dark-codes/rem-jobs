import JobItem from "./JobItem";
import { useRecoilState } from "recoil";
import { jobsState } from "../atoms/jobsAtom";

function JobList() {
  const [filter, setFilter] = useRecoilState(jobsState);
  return (
    <div className="">
      <pre>{filter}</pre>

      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
    </div>
  );
}

export default JobList;
