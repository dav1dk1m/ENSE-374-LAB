const bodyParser = require('body-parser');
const express = require ( "express" );

// this is a canonical alias to make your life easier, like jQuery to $.
const app = express();

// a common localhost test port
const port = 3000; 

// Simple server operation
app.listen (port, () => {
    // template literal
    console.log (`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

//here is where statis files are stores
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true})); 

app.use(bodyParser.json());

app.post("/login", (req, res) => {
    var loginEmail = req.body["email"];
    var loginPassword = req.body["password"];

    const fs = require( "fs" );
    fs.readFile ( __dirname + "/public/users.json",
            "utf8", 
            ( err, jsonString ) => {
    if ( err ) 
    {
        console.log("Error reading file from disk:", err);
        return;
    }
    try 
    {
        const user = JSON.parse(jsonString);


        if(loginEmail == user.email && loginPassword == user.password)
        {
            console.log("SUCCESSFUL Login");
            res.redirect("/todo.html");
        }
        else
        {
            console.log("LOGIN FAILED, incorrect email or password");
            res.redirect("/");
        }
    }
    catch ( err ) 
    {
        console.log("Error parsing JSON:", err);
    }
    });
});