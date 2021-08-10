import multer from 'multer';
import { MulterDestination } from '../shared/globalVariables';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, MulterDestination);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const uploadFiles = multer({storage});

module.exports = {
  uploadFilesMiddleware: uploadFiles,
};
