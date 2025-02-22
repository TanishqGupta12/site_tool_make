import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Ensure all env variables are uppercase for consistency
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to handle Cloudinary requests
export const handleCloudinaryRequest = async (method: string, name: string, buffer?: Buffer) => {
  try {
    if (method === "POST") {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { public_id: "show" },
          (error, result) => {
            if (error) {
              // console.error("Cloudinary Upload Error:", error);
              reject(error);
            } else {
              // console.log("Upload Success:", result);
              resolve(result);
            }
          }
        );
        if (buffer) {
          uploadStream.end(buffer);
        } else {
          reject(new Error("Buffer is required for upload"));
        }
      });
    } else if (method === "GET") {
      const optimizeUrl = cloudinary.url(name, {
        fetch_format: "auto",
        quality: "auto",
      });
      // console.log("Optimized URL:", optimizeUrl);
      return optimizeUrl;
    }
  } catch (error) {
    // console.error("Cloudinary Error:", error);
    throw error;
  }
};