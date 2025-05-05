const { Router } = require("express");
const dashboardRouter = Router();
const path = require("path");

dashboardRouter.get("/", (req, res) => {
    // res.sendFile(path.join(process.cwd(), "views", "dashboard.html"));
    res.render("dashboard");
});

module.exports = dashboardRouter;