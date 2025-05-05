const { Router } = require("express");
const recipeRouter = Router();
const path = require("path");

recipeRouter.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "views", "recipePage.html"));
});

module.exports = recipeRouter;