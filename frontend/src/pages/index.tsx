import Box from "@mui/material/Box";
import Posts from "@/component/Posts";
import dynamic from "next/dynamic";
import { IPost } from "@/model";
import axios from "axios";

const SharePostNoSSR = dynamic(() => import("@/component/SharePost"), {
  ssr: false,
});

interface IHome {
  posts: IPost[];
}

export default function Home({ posts }: IHome) {
  return (
    <Box component="main">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: {
            xs: "30px",
            sm: "40px",
            md: "50px",
            lg: "70px",
          },
        }}
      >
        <SharePostNoSSR />
        <Posts data={posts} />
      </Box>
    </Box>
  );
}

export async function getServerSideProps() {
  const posts = await (
    await axios(`http://localhost:1337/posts?userId=2`)
  ).data;

  return { props: { posts } };
}
