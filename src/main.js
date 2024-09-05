import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import { create } from 'express-handlebars';
import { appConfig } from './config/app.config.js';
import { router } from './routes/index.js';

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set("views", path.join(process.cwd(), "src", "views"));


const hbs = create({
    extname: ".hbs",
    defaultLayout: "main",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");


app.use("/public", express.static(path.join(process.cwd(), "src", "public")));


app.use('/api/v1', router);




app.listen(appConfig.port, appConfig.host, () => {
    console.log('Server listening on port:', appConfig.port);
});
