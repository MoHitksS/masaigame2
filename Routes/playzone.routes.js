const { Router } = require('express');
const randomWords = require('random-words');
const { UserModel } = require('../Models/playzone.model');
const Playzone = Router();

Playzone.post('/get', async (req, res) => {
    const { category, difficulty, numberofquestions } = req.body
    if (category === 'Sports') {
        const data = await UserModel.find({ category: category, difficulty: "hard" }).limit(numberofquestions);
        res.send(data)
    } else {
        const data = await UserModel.find({ category: category, difficulty: difficulty }).limit(numberofquestions);
        res.send(data)
    }
})

module.exports = {
    Playzone
}