import React from "react";
import SanitizeHTML from "../utils/sanitize";

function JobDescription({ desc }) {
  return <SanitizeHTML html={desc} />;
}

export default JobDescription;
