const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend requests
    methods: ["POST"], // Allow POST requests
    allowedHeaders: ["Content-Type", "Password"], // Allow custom headers
  })
);

app.use(express.json());

// Ensure the 'services' folder exists
const servicesPath = path.join(__dirname, "services");
if (!fs.existsSync(servicesPath)) {
  fs.mkdirSync(servicesPath, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const category = req.body.category || "general";
    const uploadPath = path.join(servicesPath, category);

    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Password-Protected Middleware
const checkAuth = (req, res, next) => {
  const { password } = req.headers;
  if (password !== process.env.UPLOAD_PASSWORD) {
    return res.status(403).json({ error: "Unauthorized Access: Invalid Password" });
  }
  next();
};

// Upload Route (Only for Authorized User)
app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "File upload failed!" });
  }
  res.json({ message: "Upload successful!", filePath: `/services/${req.body.category}/${req.file.filename}` });
});

// Serve Uploaded Images
app.use("/services", express.static(path.join(__dirname, "services")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
