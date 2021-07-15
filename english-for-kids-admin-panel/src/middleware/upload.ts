import multer from 'multer';
import moment from 'moment';
import { Request } from 'express';

const filesStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    const date = moment().format('DDMMYYYY-HHmmss SSS');
    cb(null, `${date}-${file.originalname}`);
  },
});

const fileFilter = (req: Request, file: any, cb: any) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({
  storage: filesStorage,
  fileFilter,
});
