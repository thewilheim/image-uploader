module.exports = {
  url: process.env.DB_URL || "mongodb://localhost:27017/",
  database: "imageDB",
  imgBucket: "photos",
};
