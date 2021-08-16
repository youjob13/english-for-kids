import { MulterFiles } from '../interfaces/api-models';
import { EMPTY_LINE, FileFieldName, Video } from '../globalVariables';

const cloudinary = require('../../utils/cloudinary');

const pullMediaData = async (files: Express.Multer.File[] | undefined | MulterFiles): Promise<[string, string]> => {
  if (files && files.length && Array.isArray(files)) {
    const [fileOne, fileTwo] = files;

    const image = fileOne.fieldname === FileFieldName.IMAGE
      ? fileOne
      : fileTwo;
    const sound = fileOne.fieldname === FileFieldName.SOUND
      ? fileOne
      : fileTwo;

    const cloudinaryImage = image ? await cloudinary.uploader.upload(image.path) : EMPTY_LINE;
    const cloudinaryAudio = sound ? await cloudinary.uploader.upload(sound.path, {
      resource_type: Video,
    }) : EMPTY_LINE;

    return [cloudinaryImage ? cloudinaryImage.secure_url : EMPTY_LINE, cloudinaryAudio ? cloudinaryAudio.secure_url : EMPTY_LINE];
  }

  return [EMPTY_LINE, EMPTY_LINE];
};

export default pullMediaData;
