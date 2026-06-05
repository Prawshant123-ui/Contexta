const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "ai-notes-rag-api",
  });
});

module.exports = router;