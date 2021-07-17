import { Router } from 'express';
import multer from 'multer';
import {
  createCard, getCards, removeCard, updateCard,
} from './cardsControl';

const {authMiddleware} = require('../middleware/authMiddleware');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/');
  },
  filename: (req, file, cb) => {
    let fileExt; // TODO: убрать костыль
    if (file.mimetype === 'image/png'
      || file.mimetype === 'image/jpg'
      ||file.mimetype === 'image/jpeg') {
      fileExt = 'jpg';
    } else {
      fileExt = 'mp3';
    }
    cb(null, `${Date.now()}.${fileExt}`);
  },
});

// // определение фильтра
// const fileFilter = (req: Request, file: any, cb: any) => {
//   if (file.mimetype === 'image/png'
//     || file.mimetype === 'image/jpg'
//     ||file.mimetype === 'image/jpeg') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

const upload = multer({storage});

const cardsRouter = Router();

cardsRouter.get('/', getCards);
cardsRouter.delete('/', authMiddleware, removeCard);
cardsRouter.put('/', authMiddleware, upload.any(), updateCard);
cardsRouter.post('/', authMiddleware, upload.any(), createCard);

export default cardsRouter;
