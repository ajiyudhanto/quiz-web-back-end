const { 
    Multiple_Choice_Single_Answer_Question,
    Multiple_Choice_Two_Answer_Question, 
    Short_Response_Question
} = require('../models')

class Controller {
    static async getQuestions (req, res, next) {
        try {
            let MCSAQ = 0
            let MCTAQ = 0
            let SRQ = 0
            for (let i = 0; i < 10; i++) {
                const choosen = Math.floor(Math.random() * 2)
                if (choosen === 0 && MCSAQ < 4) {
                    MCSAQ++
                } else if (choosen === 1 && MCTAQ < 4) {
                    MCTAQ++
                } else {
                    SRQ++
                }
            }
            let allMCSAQ = await Multiple_Choice_Single_Answer_Question.findAll()
            let allMCTAQ = await Multiple_Choice_Two_Answer_Question.findAll()
            let allSRQ = await Short_Response_Question.findAll()
            let questions = []
            for (let i = 0; i < MCSAQ; i++) {
                const index = Math.floor(Math.random() * allMCSAQ.length)
                const question = allMCSAQ.splice(index, 1)
                question[0].dataValues.type = 'MCSAQ'
                questions.push(question[0])
            }
            for (let i = 0; i < MCTAQ; i++) {
                const index = Math.floor(Math.random() * allMCTAQ.length)
                const question = allMCTAQ.splice(index, 1)
                question[0].dataValues.type = 'MCTAQ'
                questions.push(question[0])
            }
            for (let i = 0; i < SRQ; i++) {
                const index = Math.floor(Math.random() * allSRQ.length)
                const question = allSRQ.splice(index, 1)
                question[0].dataValues.type = 'SRQ'
                questions.push(question[0])
            }
            res.status(200).json({ msg: 'fetched 10 questions successfully', questions })
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async createShortResponseQuestion (req, res, next) {
        try {
            const { question, answer, img_url } = req.body
            const result = await Short_Response_Question.create({
                question, answer, img_url
            })
            res.status(201).json({ msg: 'question created successfully', details: result })
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async createMultipleChoiceTwoAnswerQuestion (req, res, next) {
        try {
            const { 
                question, 
                false_option_1,
                false_option_2,
                correct_option_1,
                correct_option_2,
                img_url 
            } = req.body
            const result = await Multiple_Choice_Two_Answer_Question.create({
                question, 
                false_option_1,
                false_option_2,
                correct_option_1,
                correct_option_2,
                img_url
            })
            res.status(201).json({ msg: 'question created successfully', details: result })
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async createMultipleChoiceSingleAnswerQuestion (req, res, next) {
        try {
            const { 
                question, 
                false_option_1,
                false_option_2,
                false_option_3,
                correct_option_1,
                img_url 
            } = req.body
            const result = await Multiple_Choice_Single_Answer_Question.create({
                question, 
                false_option_1,
                false_option_2,
                false_option_3,
                correct_option_1,
                img_url
            })
            res.status(201).json({ msg: 'question created successfully', details: result })
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = Controller