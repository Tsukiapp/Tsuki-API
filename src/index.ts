// import:
import express from 'express';
import router from './routes/routes.js';
import { BASE_URL } from './lib/keys.js';
//initialize:
const app = express();

//setting:
app.set('port', 3000 || process.env.PORT);

//Routes:
app.use(BASE_URL, router)
//Middleware:
app.use(express.urlencoded({ extended: false }));

//start:
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
});