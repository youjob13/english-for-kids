import multer from 'multer';

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

const uploadFiles = multer({storage});

module.exports = {
  uploadFilesMiddleware: uploadFiles,
};
