const express = require("express");

const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require('path');

dotenv.config();
connectDB();
const app = express();


// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = process.env.PORT || 9001;

app.use('/api/v1/test',require('./routes/testRoute'))
app.use('/api/v1/auth',require('./routes/authRoute'))
app.use('/api/v1/inventory',require('./routes/inventoryRoute'))
app.use('/api/v1/analytics',require('./routes/analyticsRoute'))

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
});


app.listen(PORT,()=>{
    console.log(`Server running in port number ${PORT}`);
})
