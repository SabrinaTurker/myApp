const express = require("express")
const app = express()

const { engine } = require("express-handlebars")
app.engine("handlebars", engine({ defaultLayout:"main"}))
app.set("view engine", "handlebars")
app.set("views", "views")

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true })); // to parse the form data

app.listen(8080, () => {
	console.log("server is at port 8080", 8080)
})

//routing
app.get("/", (req, res) => {
	res.render("index")
	//homepage
})

app.get('/login', (req, res) => {
    res.render("login", { message: "" });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // check if the credentials are valid
    if (username === 'Quinesha' && password === 'meep') {
        res.render('success');
    } else {
        res.render('login', { message: "Invalid username or password" });
    }
})