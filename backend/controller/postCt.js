const { Post } = require("../model/Post");

exports.getPosts = (req, res) => {
  Post.find({})
    .then(posts => {
      res.status(200).json({
        posts: posts
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Could not load all posts!"
      });
    });
};

exports.newPost = (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post
    .save()
    .then(post => {
      res.status(201).json({
        post: post
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Could not create new post!"
      });
    });
};

exports.deletePost = (req, res) => {
  Post.findOneAndDelete({ _id: req.params.id })
    .then(post => {
      res.status(200).json({
        deletedPost: post
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Could not delete post!"
      });
      console.log(err);
    });
};

exports.updatePost = (req, res) => {
  const post = new Post({
    _id: req.body._id,
    title: req.body.title,
    content: req.body.content
  });
  Post.findOneAndUpdate({ _id: req.params.id }, post)
    .then(updPost => {
      res.status(200).json({
        updatedPost: updPost
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Could not update post!"
      });
      console.log(err);
    });
};
