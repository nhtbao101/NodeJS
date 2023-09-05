const express = require('express');
const siteController = require('../../controller/SiteController');

const router = express.Router();
// site
router.get('/contact', siteController.contact);
router.get('/', siteController.index);

module.exports = router;
