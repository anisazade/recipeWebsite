const { Router } = require("express");
const homeRouter = Router();
const path = require("path");

homeRouter.get("/", (req, res) => {
    // res.sendFile(path.join(process.cwd(), "views", "homepage.html"));
    res.render("homepage");
});

module.exports = homeRouter;
