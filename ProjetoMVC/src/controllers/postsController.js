import { postModel } from "../models/postModel.js";

export const postsController = {
  index: (req, res) => {
    const posts = postModel.getAllPosts();
    res.render("index", { posts });
  },
  show: (req, res) => {
    const id = req.params.id;
    const post = postModel.getPostbyId(id);

    res.render("post", { post });
  },
};
