require("dotenv").config();
const express = require('express');
const app = express();
const route = require("./routers");
const { configViewEngine } = require("./config/viewEngine");
const hostname = "localhost";
const port = process.env.PORT;


//import config Viewengine
configViewEngine(app);

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse

// Route init
route(app);

(async () => {
    try {
        app.listen(port, hostname, (req, res) => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.log(">>> ", error);
    }
})();

