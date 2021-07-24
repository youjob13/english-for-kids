import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';
import log4js from 'log4js';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger/swagger.json';
import authRouter from './auth/authRouter';
import cardsRouter from './cards/cardsRouter';
import categoryRouter from './category/categoryRouter';

const { secret } = require('./config');

const logger = log4js.getLogger();
logger.level = 'debug';

const PORT = process.env.PORT || 5000;
const publicPath = path.resolve(__dirname, '../public');

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
  secret,
  resave: true,
  saveUninitialized: true,
}));

app.use('/', express.static(publicPath));
app.use('/auth', authRouter);
app.use('/cards', cardsRouter);
app.use('/category', categoryRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.5deel.mongodb.net/english-for-kids?retryWrites=true&w=majority',
      {
        useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true,
      });
    app.listen(PORT, () => logger.info(`Server started on ${PORT}`));
  } catch (error) {
    logger.debug(error);
  }
};

start();
