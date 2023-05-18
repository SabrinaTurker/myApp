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
	if (req.body.username === "Quinesha" && req.body.password === "meep") {
		res.render("login")
	} else {
		res.render("success", { message: "Invalid username or password" })
		//display error message
	}
})

const mongoose = require("mongoose")

// Replace 'YOUR_CONNECTION_STRING' with your actual MongoDB connection string
mongoose.connect("mongodb+srv://Quinesha:mewmew@cluster0.dxzuovb.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Connected to the database")
	})
	.catch((error) => {
		console.error("Error connecting to the database:", error)
	})

const User = require("./user")

const newUser = new User({
	name: "Quinesha van Burgh",
	email: "quinesha@hotmail.com",
	age: 23
})
    
newUser.save()
	.then(() => {
		console.log("User created successfully")
	})
	.catch((error) => {
		console.error("Error creating user:", error)
	})

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
	res.status(404).render("404", { imagePath: "/images/404.png" })
})