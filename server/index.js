const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()


const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('welcome to backend')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
