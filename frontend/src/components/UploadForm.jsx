import React, { useState } from "react";
import axios from "axios";

const categories = [
  { name: "plastic-flowers", title: "Plastic Flower Decoration 🌸" },
  { name: "natural-flowers", title: "Natural Flower Decoration 🌿" },
  { name: "balloon", title: "Balloon Decoration 🎈" },
  { name: "car-decoration", title: "Car Decoration 🚗💐" },
  { name: "haldi", title: "Haldi Decoration 🧡" },
  { name: "housewarming", title: "Housewarming Decor 🏡" },
  { name: "corporate", title: "Corporate Events 🎤" },
  { name: "festival", title: "Festival Lighting ✨" },
];

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(categories[0].name);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first!");
      return;
    }
    if (!password) {
      setMessage("Enter the upload password!");
      return;
    }

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("category", category);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Password": password, // User enters password
        },
      });

      setMessage("✅ Upload Successful!");
      console.log("File uploaded:", res.data);
    } catch (error) {
      setMessage("❌ Upload Failed! Check password or server.");
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload Image</h2>

      {/* Category Selection */}
      <label className="block text-gray-700 mb-1">Select Category:</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-2 block w-full p-2 border border-gray-300 rounded"
      >
        {categories.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.title}
          </option>
        ))}
      </select>

      {/* File Upload Input */}
      <input type="file" onChange={handleFileChange} className="mb-2 block w-full p-2 border border-gray-300 rounded" />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Enter Upload Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 block w-full p-2 border border-gray-300 rounded"
      />

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {/* Message Display */}
      {message && <p className="mt-2 text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default UploadForm;
