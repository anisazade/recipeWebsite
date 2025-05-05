/* FIXME
- put the error message inside an HTML page
*/

const express = require("express");
const path = require("path");
const homeRouter = require("./routes/homeRouter");
const recipeRouter = require("./routes/recipeRouter");
const dashboardRouter = require("./routes/dashboardRouter");
const NotFoundError = require("./errors/404error");

const server = express();
const PORT = process.env.PORT || 3000;

server.set("views", path.join(process.cwd(), "views"));
server.set("view engine", "ejs");

server.use(express.static("public"));
server.use("/", homeRouter);
server.use("/home", homeRouter);
server.use("/recipe", recipeRouter);
server.use("/dashboard", dashboardRouter);
server.use((req, res, next) => {
    next(new NotFoundError("Page Not found"));
});
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).send(err.message);
});

server.listen(PORT, () => {
    console.log(`Server is running - listening on port ${PORT}!`);
});
