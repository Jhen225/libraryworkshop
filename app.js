const express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    ip = require('ip'),
    mongoose = require('mongoose'),
    path = require('path'),
    cors = require('cors');
    config = require('./config/config.json')
    passport = require('passport')
    compression = require('compression'),
    fs = require('fs'),
    rfs = require('rotating-file-stream');

//Instantiate controllers
const userController = require('./controllers/user');
const participantsController = require('./controllers/participants');
const workshopsController = require('./controllers/workshops');


const PORT = process.env.PORT || 3000;
const app = express()
const logDirectory = path.join(__dirname,'logs');

function main(){


    //Connect to mongoDb database
    mongoose.connect(config.database)
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
    
    
    const accessLogStream = rfs('accessLog.log',{
        interval:'1d',
        path:logDirectory
    });

    app.use(cors());
    app.use(compression());
    app.use(express.static(path.join(__dirname,'/public')))
    
    //Register middleware
    app.use(bodyParser.urlencoded({limit:'50mb', extended: false }))
    app.use(bodyParser.json({limit:'50mb'}));
    app.use(morgan('dev'))
    app.use(morgan('combined',{stream:accessLogStream}));
    app.use(passport.initialize())
    app.use(passport.session())

    require('./config/passport')(passport);

    //Register controllers as middleware
    app.use('/user',userController)
    app.use('/participant',passport.authenticate('jwt',{session:false}),participantsController)
    app.use('/workshop',passport.authenticate('jwt',{session:false}),workshopsController)

    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'))
    })

    //Start server
    app.listen(PORT,'0.0.0.0',()=>{
        console.log('Servers started at ' + ip.address() + ':' + PORT);
    })

}

main();
