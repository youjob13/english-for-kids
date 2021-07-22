import log4js from 'log4js';

const cloudinary = require('../../utils/cloudinary');

const logger = log4js.getLogger();

const getCardData = async (files: any): Promise<[string, string]> => {
  if (files.length && Array.isArray(files)) {
    const [fileOne, fileTwo] = files;

    const image = fileOne.fieldname === 'image'
      ? fileOne
      : fileTwo;
    const sound = fileOne.fieldname === 'sound'
      ? fileOne
      : fileTwo; // TODO: переписать

    const cloudinaryImage = image ? await cloudinary.uploader.upload(image.path) : '';
    const cloudinaryAudio = sound ? await cloudinary.uploader.upload(sound.path, {
      resource_type: 'video',
    }) : '';

    return [cloudinaryImage ? cloudinaryImage.secure_url : '', cloudinaryAudio ? cloudinaryAudio.secure_url : ''];
  }

  return ['', ''];
};

export default getCardData;
