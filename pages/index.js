import BlogPosts from "@/components/BlogPosts";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center mt-3 font-bold text-3xl text-blue-700">
        My Blog
      </h1>
      <BlogPosts limit={3} />
      <Link href="/posts" className="mt-5">
        All Posts
      </Link>
      <Link href="/dashboard" className="mt-5">
        Dashboard
      </Link>
    </div>
  );
}
