import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';
import { getLogger } from 'log4js';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger/swagger.json';
import authRouter from './auth/authRouter';
import wordsRouter from './words/wordsRouter';
import categoryRouter from './category/categoryRouter';
import statisticsRouter from './statistics/statisticsRouter';
import {
  MongoDBOptions,
  MongoDBURL, PORT, publicPath, RouterPath, ServerStartedMessage,
} from './shared/globalVariables';

const { secret } = require('./config');

const logger = getLogger();
logger.level = 'debug';

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
  secret,
  resave: true,
  saveUninitialized: true,
}));

app.use(RouterPath.ROOT, express.static(publicPath));
app.use(RouterPath.AUTH, authRouter);
app.use(RouterPath.WORDS, wordsRouter);
app.use(RouterPath.CATEGORY, categoryRouter);
app.use(RouterPath.STATISTICS, statisticsRouter);

app.use(RouterPath.SWAGGER, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const start = async () => {
  try {
    await mongoose.connect(MongoDBURL, MongoDBOptions);
    app.listen(PORT, () => logger.info(ServerStartedMessage));
  } catch (error) {
    logger.debug(error);
  }
};

start();
