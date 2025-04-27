const express = require("express");
const router = express.Router();

// Routes
router.get("", (req, res) => {
  const locals = {
    title: "Mehr Node.js",
    description: "This is my First trying to code backed with Node.js",
  };
  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  const locals = {
    title: "am I Good Friend?",
  };
  res.render("about", { locals });
});

module.exports = router;
