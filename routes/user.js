const express = require("express");
const router = express.Router();

// router.use(mylogger);

router.get("/", (req, res) => {
  res.send("ユーザーです");
});

router.get("/info", (req, res) => {
  res.send("ユーザー情報です");
});

router.get("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を取得しました`);
});

router.post("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を作成しました`);
});

router.patch("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を更新しました`);
});

router.delete("/:id", (req, res) => {
  res.send(`${req.params.id}のユーザー情報を削除しました`);
});

// ミドルウェア
// function mylogger(req, res, next) {
//   console.log(req.originalUrl);
//   next();
// }

module.exports = router;