let posts = [
  {
    id: "1",
    title: "teste",
    content: "Loren",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "teste",
    content: "Loren2",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "teste",
    content: "Loren3",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

//Modelo com funçoes de Posts
export const postModel = {
  //retornar todos os posts
  getAllPosts() {
    return posts;
  },

  //pegar post por ID
  getPostbyId(id) {
    return posts.find((post) => post.id == id);
  },

  //criar Post
  creatPost(title, content) {
    const post = {
      id: Date.now().toString(),
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return post;
  },

  //salvar post
  savePost(posts) {
    posts.unshift(post);
  },

  //atualizar post
  updatePost(id, updatedPost) {
    const index = posts.findIndex((post) => post.id === id);
    posts[index] = { ...posts[index], ...updatedPost, updatedAt: new Date() };
  },

  //deletar Post
  deletePost(id) {
    return posts.filter((post) => post.id !== id);
  },
};
