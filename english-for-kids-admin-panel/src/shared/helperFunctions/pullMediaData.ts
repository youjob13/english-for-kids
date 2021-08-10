import { MulterFiles } from '../interfaces/api-models';

const cloudinary = require('../../utils/cloudinary');

const pullMediaData = async (files: Express.Multer.File[] | undefined | MulterFiles): Promise<[string, string]> => {
  if (files && files.length && Array.isArray(files)) {
    const [fileOne, fileTwo] = files;

    const image = fileOne.fieldname === 'image'
      ? fileOne
      : fileTwo;
    const sound = fileOne.fieldname === 'sound'
      ? fileOne
      : fileTwo;

    const cloudinaryImage = image ? await cloudinary.uploader.upload(image.path) : '';
    const cloudinaryAudio = sound ? await cloudinary.uploader.upload(sound.path, {
      resource_type: 'video',
    }) : '';

    return [cloudinaryImage ? cloudinaryImage.secure_url : '', cloudinaryAudio ? cloudinaryAudio.secure_url : ''];
  }

  return ['', ''];
};

export default pullMediaData;
