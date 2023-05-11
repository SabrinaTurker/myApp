const express = require("express")
const app = express()

const { engine } = require("express-handlebars")
app.engine("handlebars", engine({ defaultLayout:"main"}))
app.set("view engine", "handlebars")
app.set("views", "views")

app.use(express.static("public"))

app.listen(8080, () => {
	console.log("server is at port 8080", 8080)
})

//routing
app.get("/", (req, res) => {
	res.render("index")
	//homepage
})

app.get('/login', (req, res) => {
    // login.handlebars
})