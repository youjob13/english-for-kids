import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './authorize/authRouter';
import config from './config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const session = require('express-session');

const PORT = 3900;

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
  secret: config.secret,
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
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
