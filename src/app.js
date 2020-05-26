const express = require('express');
const app = express();
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const mainRoutes = require('./backend/routes/mainRoutes');
const session = require('express-session');
const Nexmo = require('nexmo');
// const MongoStore = require('connect-mongo')(session);

// var connection = 'mongo'

const nexmo = new Nexmo({
    apiKey:'ca344c09',
    apiSecret: 'DaCTpIzPZPfuj3GF',
    applicaionId: '851bfcc3-cb45-4fcb-9b6d-21ae37d5792b'
})


app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname)));
app.use(logger('dev'));
app.use(session({
    secret: "big",
    // store: new MongoStore({
    //     mongooseConnection: connection,
    //     collection: 'sessions'
    // }),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000*60*60*24
    }
}))

// app.use(function(req, res,next){
//     if(req.session.user){
//         app.locals.user = req.session.user;
//     }
//     next();
// })

app.use('/', mainRoutes);
app.set('port',process.env.PORT|| 4000);

app.listen(app.get('port'), () =>{
    console.log('app is running');
})

module.exports = app;