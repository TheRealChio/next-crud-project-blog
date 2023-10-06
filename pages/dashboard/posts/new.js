import { mutate } from "swr";
import { useRouter } from "next/router";
import Form from "@/components/Form";

function CreatePage() {
  const router = useRouter();

  async function createPost(post) {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      mutate("/api/posts");
      router.push("/dashboard");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center mt-3 font-bold text-3xl text-blue-700">
        New Post
      </h1>
      <Form onSubmit={createPost} formName={"add-post"} />
    </div>
  );
}

export default CreatePage;
