import { query } from "../../lib/db";

export default async function handler(req, res) {
  const id = req.body.id;
  try {
    const querySql =
      "SELECT id, title, description, image FROM posts WHERE id = ?";
    const valueParams = [id];
    const data = await query({ query: querySql, values: valueParams });

    res.status(200).json({ posts: data });
  } catch (error) {
 
    // res.status(500).json({ error: error.message });
  }
}
