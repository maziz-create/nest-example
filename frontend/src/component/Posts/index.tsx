import { IPost } from "@/model";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IPosts {
  data: IPost[];
}

function Posts({ data }: IPosts) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography variant="h3">Posts</Typography>
      {data.map((post: IPost, i) => (
        <Paper
          key={i}
          elevation={3}
          sx={{ width: { xs: "100%", sm: "400px" }, mt: "10px", p: "15px" }}
        >
          <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
        </Paper>
      ))}
    </Box>
  );
}

export default Posts;
