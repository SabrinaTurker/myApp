const express = require("express")
const app = express()

const { engine } = require("express-handlebars")
app.engine("handlebars", engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.set("views", "views")

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))
// to parse the form data

app.listen(8080, () => {
	console.log("server is at port 8080", 8080)
})

//routing
app.get("/", (req, res) => {
	res.render("index")
	//homepage
})

app.get("/guest", (req, res) => {
	res.render("login", { message: "" })
	//loginpage versie 2
})

app.post("/login", (req, res) => {
	// const { username, password } = req.body
	// check if everything is correct
	if (req.body.username === "Quinesha" && req.body.password === "meep") {
		res.render("login")
	} else {
		res.render("success", { message: "Invalid username or password" })
		//display error message
	}
})
