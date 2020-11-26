const { 
    Multiple_Choice_Single_Answer_Question,
    Multiple_Choice_Two_Answer_Question, 
    Short_Response_Question
} = require('../models')

class Controller {
    static async getQuestions (req, res, next) {
        try {
            
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