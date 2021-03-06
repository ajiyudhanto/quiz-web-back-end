const express = require('express')
const router = express.Router()
const Controller = require('../controllers/index')

router.get('/', (req, res) => { res.send('connected') })
router.get('/all', Controller.getQuestions)
router.post('/short-response-question', Controller.createShortResponseQuestion)
router.post('/multiple-choice-two-answer-question', Controller.createMultipleChoiceTwoAnswerQuestion)
router.post('/multiple-choice-single-answer-question', Controller.createMultipleChoiceSingleAnswerQuestion)

module.exports = router