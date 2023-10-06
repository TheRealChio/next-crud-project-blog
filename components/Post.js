import Link from "next/link";
import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();

  return (
    <li>
      <Link
        href={`/posts/${post._id}`}
        className="w-[300px] h-[200px] bg-slate-200  rounded-xl p-5 flex flex-col justify-center items-center"
      >
        Image
      </Link>
      <div className="mt-3 mx-1 flex flex-wrap justify-between gap-5">
        <h3 className="font-semibold">{post.title}</h3>
        {router.pathname === "/dashboard" && (
          <Link href={`/dashboard/posts/${post._id}/edit`}>🖊️ Edit</Link>
        )}
      </div>
    </li>
  );
}

export default Post;
{
}
