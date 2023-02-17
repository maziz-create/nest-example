import axios from "axios";

export async function savePost(htmlContent: string) {
  return (
    await axios.post("/api/posts", {
      htmlContent,
    })
  ).status;
}
