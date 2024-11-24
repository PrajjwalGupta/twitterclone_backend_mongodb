const express = require('express');
const Tweet = require('./models/tweet');

require('./db/mongoose')
const app = express();
const UserRouter = require('./routers/user')
const tweetRouter = require('./routers/tweet')
const notificationRouter = require('./routers/notification')
const port = process.env.PORT || 3007;
app.use(express.json())
app.use(UserRouter);
app.use(tweetRouter);
app.use(notificationRouter);
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})
