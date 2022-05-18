import { atom } from "recoil";

export const jobsState = atom({
  key: "jobsState",
  default: false,
});

export const newJobState = atom({
  key: "newJobState",
  default: false,
});
