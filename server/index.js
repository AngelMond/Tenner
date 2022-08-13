const { application } = require("express");
const conversationRoute = require ("./routes/conversation");
const messageRoute = require ("./routes/messages");



// middleware ///

app.use ("/server/conversations", conversationRoute);
app.use ("/server/message", messageRoute);