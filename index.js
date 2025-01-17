const path = require('path');
// load dependencies
const env = require('dotenv');
const csrf = require('csurf');
const express = require('express');
const flash = require('express-flash');
const bodyParser = require('body-parser');
// const session = require('express-session');
const expressHbs = require('express-handlebars');
// const SequelizeStore = require("connect-session-sequelize")(session.Store); // initalize sequelize with session store

const app = express();
const csrfProtection = csrf();
const router = express.Router();

//Loading Routes
const webRoutes = require('./routes/web');
const sequelize = require('./config/database');
const mongodb = require('./config/mongo');
const errorController = require('./app/controllers/ErrorController');

env.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// required for csurf
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: process.env.SESSION_SECRET,
//   	cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
//     store: new SequelizeStore({
//     	db: sequelize,
//     	table: "sessions",
//     }),
// }));

// let pingCount = 0;
// let rateLimit = 50;
// app.use((req, res, next) => {
// 	pingCount++;

// 	let currentTime = Date.now();
// 	console.log('==>',pingCount,currentTime,req.headers["client-id"]);
// 	if (pingCount > rateLimit ) {
// 		return res.status(429).json({ "result":"limit exceeded" });
// 	}
// 	setInterval(function () {
// 			pingCount = 0;
// 	 }, 60000);
// 	next()
//   })
  

// app.use(csrfProtection);
// app.use(flash());

app.use((req, res, next) => {
	// res.locals.isAuthenticated = req.session.isLoggedIn;
	// res.locals.csrfToken = req.csrfToken();
	next();
});

app.engine(
	'hbs',
	expressHbs({
		layoutsDir: 'views/layouts/',
		defaultLayout: 'web_layout',
		extname: 'hbs'
	})
);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(webRoutes);
const router1 = express.Router();
router1.get("/heartbeat",(request,response)=>{
	response.json({"message":"ok"})
})
app.use(router1);
app.use(errorController.pageNotFound);

// sequelize
// 	//.sync({force : true})
// 	.sync()
// 	.then(() => {
// 		app.listen(process.env.PORT);
// 		//pending set timezone
// 		console.log("App listening on port " + process.env.PORT);
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});
app.listen(3000);
		//pending set timezone
		console.log("App listening on port " + 3000);
