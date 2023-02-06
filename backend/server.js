let express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    database = require('./database'),
    bodyParser = require('body-parser')


//connect 
mongoose.Promise = global.Promise;
mongoose.connect(database.db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log('database connect la')
}, error =>{
    console.log('error : ' + error)
})
const studentAPI = require('./routes/student.routes');
const app = express();
const createError = require('http-errors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(cors())
//API 
app.use('/api', studentAPI)
//port
const port = process.env.PORT || 4000;
const server = app.listen(port, ()=>{
    console.log("connected port :" +  port)
})
// 404 handler
app.use((req, res, next) =>{
    next(createError(404))
})
// error handler

app.use(function(err, req, res, next){
    console.error(err.message)
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})