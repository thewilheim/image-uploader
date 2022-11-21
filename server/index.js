const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

//Here we are configuring express to use body-parser as middle-ware.
app.use(express.json());
app.use(cors());
app.use(express.static("uploads"));

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/image", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/uploadImage", upload.single("image"), (req, res) => {
  res.send(req.file);
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
