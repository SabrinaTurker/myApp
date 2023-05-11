const express = require("express")
const app = express()

const { engine } = require("express-handlebars")
app.engine("handlebars", engine({ defaultLayout:"main"}))
app.set("view engine", "handlebars")
app.set("views", "views")

app.listen(3000, () => {
	console.log("server is at port 3000", 3000)
})

//routing
app.get("/", (req, res) => {
	res.render("index")
})
