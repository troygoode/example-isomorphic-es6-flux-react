"use strict";

import express from "express";
import postsRouter from "./posts";

let router = new express.Router();

router.use("/posts", postsRouter);

module.exports = router;
