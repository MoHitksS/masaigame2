const mongoose = require('mongoose');
const questionSchema = mongoose.Schema({
    category: { type: String },
    type: { type: String },
    difficulty: { type: String },
    question: { type: String },
    correct_answer: { type: String },
    incorrect_answers: [String]
})


const UserModel = mongoose.model('quizs', questionSchema)

module.exports = {
    UserModel
}