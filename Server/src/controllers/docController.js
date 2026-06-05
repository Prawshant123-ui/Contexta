const { prisma } = require("../config/db");
const { uploadToCloudinary } = require("../services/cloudinaryServices");

const uploadDocument = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const uploadResult = await uploadToCloudinary(file.buffer);

    const document = await prisma.document.create({
      data: {
        title: file.originalname,

        fileUrl: uploadResult.secure_url,
        publicId: uploadResult.public_id,
        fileType: file.mimetype,
        userId: req.body.userId || "demo-user",
      },

    });
          res.status(201).json({
            message:"Document uploaded sucessfully",
            document
          })

  } catch (error) {
    onsole.error(err);
    return res.status(500).json({ message: "Upload failed" });
  }
};

module.exports={uploadDocument}