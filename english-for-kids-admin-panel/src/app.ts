import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';
import log4js from 'log4js';
import router from './auth/authRouter';

const { secret } = require('./config');

const logger = log4js.getLogger();
logger.level = 'debug';

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
  secret,
  resave: true,
  saveUninitialized: true,
}));
app.use('/auth', router);

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
