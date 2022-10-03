const express = require('express')
const app = express()
const _env = require('dotenv')
const mongoose = require('mongoose')
const userRoutes=require('./routes/user')
_env.config();

mongoose
    .connect(

        `mongodb://localhost:27017/user_project`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.log(err);
    });


    app.use(express.json())
app.use('/user',userRoutes);

app.get('/api', (req, res) => {

    console.log("API is running properly")
    res.send("API is running properly")
})


app.listen(process.env.PORT || 2000, () => {
    console.log(`server running pn port number http://localhost:${process.env.port}`)
})