const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const mainRoutes = require('./backend/routes/mainRoutes');


app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname)));
app.use(logger('dev'));

app.use('/', mainRoutes);
app.set('port',process.env.PORT|| 4000);

app.listen(app.get('port'), () =>{
    console.log('app is running');
})

module.exports = app;