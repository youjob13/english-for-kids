import multer from 'multer';
// import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const uploadFiles = multer({storage});

// const uploadFiles = multer({dest: path.join(__dirname, 'public')});

module.exports = {
  uploadFilesMiddleware: uploadFiles,
};
