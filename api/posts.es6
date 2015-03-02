"use strict";

import {Router} from "express";

let router = new Router();
let posts = [
  {
    id: 1,
    title: "first post",
    content: "hello world"
  },
  {
    id: 2,
    title: "second post",
    content: "foo bar"
  },
  {
    id: 3,
    title: "third post",
    content: "fizz buzz"
  }
];

router.get("/", (req, res) => {
  res.json(posts);
});

router.get("/:id", (req, res, next) => {
  let post = posts.find(p => p.id.toString() === req.params.id);
  if (!post) {
    return next();
  }
  res.json(post);
});

export default router;
