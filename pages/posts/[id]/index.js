import Post from "@/components/Post";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

function PostDetailPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: post, isLoading, error } = useSWR(`/api/posts/${id}`);

  if (!isReady || isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Something went wrong...</h2>;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center mt-3 font-bold text-3xl text-blue-700">
        {post.title}
      </h1>
      <h2 className="mt-3">{post.author}</h2>
      <p className="mt-10">{post.text}</p>
      <Link href="/posts">All Posts</Link>
    </div>
  );
}

export default PostDetailPage;
