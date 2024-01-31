const multer = require("multer");
const path = require("path");

const imageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        let folder = "";

        if (req.baseUrl.includes("users")) {
            folder = "users";
        } else if (req.baseUrl.includes("pets")) {
            folder = "pets";
        }

        const destinationPath = `public/images/${folder}`;
        cb(null, destinationPath);
    },
    filename: function(req, file, cb) {
        const fileName = `${Date.now()}${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error("Por favor envie jpg ou png!"));
        }
        cb(null, true);
    },
});

module.exports = { imageUpload };
