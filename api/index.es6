"use strict";

import {Router} from "express";
import postsRouter from "./posts";

let router = new Router();

router.use("/posts", postsRouter);

export default router;
