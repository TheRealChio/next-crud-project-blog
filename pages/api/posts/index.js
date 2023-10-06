import connect from "@/db/connect";
import Posts from "@/db/models/Posts";

export default async function handler(req, res) {
  await connect();

  if (req.method === "GET") {
    try {
      const posts = (await Posts.find({}).limit(req.query.limit)).reverse();
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const post = await Posts.create(req.body);
      return res.status(201).json(post);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
