import connect from "@/db/connect";
import Posts from "@/db/models/Posts";

export default async function handler(req, res) {
  await connect();
  const { id } = req.query;

  if (!id) return;

  if (req.method === "GET") {
    try {
      const post = await Posts.findById(id);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(404).json({ status: "Not found" });
    }
  }

  if (req.method === "PUT") {
    try {
      await Posts.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ status: "Updated" });
    } catch (error) {
      return res.status(400).json({ status: "Not found" });
    }
  }
}
