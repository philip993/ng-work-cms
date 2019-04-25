const express = require("express");
const router = express.Router();

const postCtrl = require("../controller/postCt");

router.get("/", postCtrl.getPosts);
router.post("/", postCtrl.newPost);
router.delete("/:id", postCtrl.deletePost);
router.put("/:id", postCtrl.updatePost);

module.exports = router;
