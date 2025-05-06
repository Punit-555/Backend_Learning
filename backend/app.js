require('dotenv') .config()
const express = require('express');
const pool = require('./database/db');
const port= process.env.PORT

const app = express();
app.use(express.json());

app.post("/register", async (req, res) => {
    try {
        // Data Came from the frontend ;
        const { firstName, lastName, email, password } = req.body;
          if(!(firstName && lastName && password && email)){
            res.status(400).send('All Fields are compulsary.');             
           }
     } catch (error) {

    }
})

// listen up 
app.listen(port, () => {
    console.log('Server is running on port 5000.');
});
