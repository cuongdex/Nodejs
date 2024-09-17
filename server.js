const app = require("./app");

const config = require("./app/config");

const POST = config.app.post;

app.listen(POST,() => {
    console.log("server is running")
})