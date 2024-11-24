const mongoose = require('mongoose');
const tweetSchema = new mongoose.Schema ({
    text: {
        type: String,
        require: true,
        trim: true
    },
    user: {
        type: String,
        require: true
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    username: {
        type: String,
        require: true,
        trim: true 
    },
    Image: {
        type: Buffer
    },
    likes: {
        type: Array,
        default: []
    }
},{
    timestamps: true
})

tweetSchema.methods.toJSON = function() {
    const tweet = this
    const tweetObject = tweet.toObject()
    if(tweetObject.Image) {
        tweetObject.Image = "true"
    }
    return tweetObject
}

const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet