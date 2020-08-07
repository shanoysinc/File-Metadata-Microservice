"use strict"

var express = require("express")
var cors = require("cors")

// require and use "multer"...

var app = express()
var multer = require("multer")
var upload = multer()

app.use(cors())
app.use("/public", express.static(process.cwd() + "/public"))

app.get("/", function (req, res) {
	res.sendFile(process.cwd() + "/views/index.html")
})

app.get("/hello", function (req, res) {
	res.json({ greetings: "Hello, API" })
})

app.post("/api/fileanalyse", upload.any(), (req, res) => {
	console.log(req.files)
	res.json({
		name: req.files[0].originalname,
		type: req.files[0].mimetype,
		size: req.files[0].size,
	})
})

// app.listen(process.env.PORT || 3000, function () {
//   console.log('Node.js listening ...');
// });

app.listen(3000, () => {
	console.log("server running on port " + 3000)
})
