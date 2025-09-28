import React from "react";
import UploadForm from "../components/UploadForm";

const Upload = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Upload Images 📸</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Securely upload images for your services.
        </p>

        <div className="mt-10">
          <UploadForm />
        </div>
      </div>
    </section>
  );
};

export default Upload;
