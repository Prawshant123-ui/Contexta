const cloudinary=require('../config/cloudinary')
const streamifier=require('streamifier')

const uploadToCloudinary = (fileBuffer, folder = "ai-notes") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "raw", // important for PDFs
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

module.exports = { uploadToCloudinary };