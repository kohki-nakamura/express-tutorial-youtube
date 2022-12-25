const express = require("express");
const app = express();
const userRouter = require("./routes/user");

const PORT = 3000;

// app.use(mylogger);

// app.use(express.static("public")); // 静的ファイル
app.set("view engine", "ejs"); // 動的ファイル（テンプレートエンジン）

app.get("/", mylogger, (req, res) => {
  // console.log("hello express");
  // res.send("<h1>こんにちは</h1>");
  // res.sendStatus(400);
  // res.status(500).send("エラーです");
  // res.status(500).json({ msg: "エラーです" });
  res.render("index", { text: "NodejsとExpress" });
});

// ルーティング
app.use("/user", userRouter);

// ミドルウェア
function mylogger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(PORT, () => console.log("サーバーが起動しました"));

