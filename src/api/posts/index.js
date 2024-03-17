import { query } from "../../lib/db";

export default async function handler(req, res) {
  let message;
  if (req.method === "GET") {
    const posts = await query({
      query: "SELECT * FROM posts",
      values: [],
    });
    res.status(200).json({ posts: posts });
  }

  if (req.method === "POST") {
    const postTitle = req.body.title;
    const addPost = await query({
      query: "INSERT INTO posts (title) VALUES (?)",
      values: [postTitle],
    });
    let post = [];
    if (addPost.insertId) {
      message = "success";
    } else {
      message = "error";
    }
    post = {
      id: addPost.insertId,
      title: postTitle,
    };
    res.status(200).json({ response: { message: message, post: post } });
  }

  if (req.method === "PUT") {
    const postId = req.body.id;
    const postTitle = req.body.title;
    const updatePost = await query({
      query: "UPDATE posts SET title = ? WHERE id = ?",
      values: [postTitle, postId],
    });
    const result = updatePost.affectedRows;
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    const post = {
      id: postId,
      title: postTitle,
    };
    res.status(200).json({ response: { message: message, post: post } });
  }

  if (req.method === "DELETE") {
    const postId = req.body.id;
    const deletePost = await query({
      query: "DELETE FROM posts WHERE id = ?",
      values: [productId],
    });
    const result = deletePost.affectedRows;
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    res
      .status(200)
      .json({ response: { message: message, id: postId } });
  }
}
