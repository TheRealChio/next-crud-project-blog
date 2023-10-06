import BlogPosts from "@/components/BlogPosts";
import Link from "next/link";

function DashboardPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center mt-3 font-bold text-3xl text-blue-700">
        Dashboard
      </h1>
      <Link href="/dashboard/posts/new">New Post</Link>
      <BlogPosts />
      <Link href="/">Home</Link>
    </div>
  );
}

export default DashboardPage;
