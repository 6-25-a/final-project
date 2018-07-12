const express = require('express');
const router = express.Router();
// @route           GET api/profile/test
// @description     profile route test
// @access type     Public
router.get('/test', (req, res) => res.json({
  message: "Profile ok"
}));

module.exports = router;