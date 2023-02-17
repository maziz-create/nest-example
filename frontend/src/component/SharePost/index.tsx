import { useEffect, useState } from "react";

import ReactQuill from "react-quill";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { savePost } from "@/service/post";

function SharePost() {
  const router = useRouter();

  const refreshData = () => router.replace(router.asPath);

  const [htmlContent, setHtmlContent] = useState("");

  return (
    <Box>
      <ReactQuill
        theme="snow"
        value={htmlContent}
        onChange={setHtmlContent}
        placeholder="Share a post..."
      />
      <Button
        variant="contained"
        sx={{ mt: "10px" }}
        disabled={htmlContent === ""}
        onClick={async () => {
          const status = await savePost(htmlContent);
          if (status === 201) {
            refreshData();
            setHtmlContent("");
          } else setHtmlContent("Error!");
        }}
      >
        Save
      </Button>
    </Box>
  );
}

export default SharePost;
