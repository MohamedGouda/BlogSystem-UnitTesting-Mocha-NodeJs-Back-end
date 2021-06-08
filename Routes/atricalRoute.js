
const express = require("express");
const router = express.Router();
const articalController = require('../Controllers/articalController')

// get all articals 
router.get('/articals', articalController.getArticalsList)

// get an atrical By Id
router.get('/articals/:articalId', articalController.getArticalById)

// get a specific 
router.get('/articals/search/:articalTitle', articalController.searchByTitle)


// give a thumbs up to a specific atrical

router.post('/artical/:articalId/thumbsUp' , articalController.addThumbsUp_Query)

module.exports = router ;