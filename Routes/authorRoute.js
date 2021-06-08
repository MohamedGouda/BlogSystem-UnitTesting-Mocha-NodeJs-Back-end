
const express = require("express");
const router = express.Router();
const auhtorController = require('../Controllers/authorController')

// get all authers 
router.get('/authors', auhtorController.getAuthorsList)

// get a specific author by Id
router.get('/authors/:authorId' , auhtorController.getAuthorById)


module.exports = router ;