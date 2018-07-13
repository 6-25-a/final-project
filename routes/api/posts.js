const express = require('express');
const router = express.Router();
// @route           GET api/posts/test
// @description     posts route test
// @access type     Public
router.get('/test', (req, res) => res.json({
  message: "Posts ok"
}));

module.exports = router;