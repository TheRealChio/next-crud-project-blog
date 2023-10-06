import useSWR from "swr";
import Post from "./Post";

function BlogPosts({ limit = 20 }) {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/posts?${new URLSearchParams({ limit })}`);

  if (isLoading) return <div>Loading...</div>;

  if (!posts) return;

  return (
    <ul className="mt-7 grid grid-cols-3 justify-items-center gap-5 w-[70vw]">
      {posts.length
        ? posts.map((post) => <Post key={post._id} post={post} />)
        : "No posts created yet."}
    </ul>
  );
}

export default BlogPosts;
