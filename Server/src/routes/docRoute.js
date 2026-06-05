const router = require("express").Router();
const upload = require("../middlewares/upload");
const { uploadDocument } = require("../controllers/docController");

router.post("/upload", upload.single("file"), uploadDocument);

module.exports = router;