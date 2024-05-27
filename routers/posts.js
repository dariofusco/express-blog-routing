const express = require("express");
const router = express.Router();
const postsControllers = require("../controllers/posts");

router.get("/", postsControllers.index);

// router.get("/:slug", postsControllers.show);

// router.get("/create", postsControllers.create);

//router.get("/:slug/download", postsControllers.download);

module.exports = router;