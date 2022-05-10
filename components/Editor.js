import React, { useState } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const Editor = ({ getContent }) => {
  const [html, setHtml] = useState("");
  const handleDescriptionChange = (ct) => {
    getContent(ct);
    setHtml(ct);
  };

  return (
    <div>
      <SunEditor
        onChange={handleDescriptionChange}
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["bold", "italic", "underline", "strike"],
            ["align", "horizontalRule", "list"],
            ["link"],
          ],
        }}
      />
    </div>
  );
};
export default Editor;
