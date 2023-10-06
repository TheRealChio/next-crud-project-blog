import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import Form from "@/components/Form";

function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: post, isLoading, error } = useSWR(`/api/posts/${id}`);

  async function editPost(post) {
    const res = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      mutate(`/api/posts/${id}`);
      router.push("/dashboard");
    }
  }

  if (!isReady || isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Something went wrong...</h2>;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center mt-3 font-bold text-3xl text-blue-700">
        Edit Post
      </h1>
      <Form onSubmit={editPost} formName={"edit-post"} defaultData={post} />
    </div>
  );
}

export default EditPage;
