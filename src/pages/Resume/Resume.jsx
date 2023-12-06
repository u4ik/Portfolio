import React from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmModal, Resume_C } from "../../components";

import ResId from "./Resume_Helper";

const Resume = () => {
  //   <Resume_C />;
  const handleDownload = (option) => {
    window.open(
      option === "download"
        ? `https://drive.google.com/uc?export=download&id=${ResId}`
        : `https://drive.google.com/file/d/${ResId}/view`,
      option === "download" ? "" : "_blank"
    );
  };
  return (
    // <ConfirmModal
    //   text={"Would you like to download my resume?"}
    //   callback={handleDownload}
    //   navigatePath={"/"}
    // />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
      }}
    >
      <iframe
        src="https://drive.google.com/file/d/1BiKGYaSudSZnpkFBrOR4SEsK4pYidhW2/preview"
        width="100%"
        height="83%"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default Resume;
