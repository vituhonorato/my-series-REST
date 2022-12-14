const mongoose = require('mongoose')
const CommentSchema = mongoose.Schema({
    comment: String
})

const SerieSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    status:{
        type: String,
        enumValues:['to-watch', 'watched', 'watching']
    },
    commnets: [CommentSchema]
})


const Serie = mongoose.model('Serie', SerieSchema)

module.exports = Serie