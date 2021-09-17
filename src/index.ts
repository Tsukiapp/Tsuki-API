// import:
import express, { Request, Response, NextFunction} from 'express';
import router from './routes/routes.js';
import { BASE_URL } from './lib/keys.js';
import cors from 'cors';
import chalk from 'chalk';


//initialize:
const app = express();

//setting:
app.set('port', process.env.PORT || 5000);
//cors:
app.use(cors());
// Logger:
app.use((req: Request, res: Response, next: NextFunction) => {
  const { url, method } = req;
  const log =
    `
    ${chalk.blue('mehtod: ')}${chalk.cyan(method)}
    ${chalk.blue('url: ')}${chalk.cyan(url)}
    `
  console.log(log);
  next();
});
//Routes:
app.use(BASE_URL, router);
//Middleware:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//start:
app.listen(app.get('port'), () => {
  console.log(`server on port ${chalk.green(app.get('port'))}`);
});