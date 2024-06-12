/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  env: {
    MONGO_URI:
      "mongodb+srv://admin:admin123@pomocluster.ldqdydo.mongodb.net/?retryWrites=true&w=majority&appName=pomocluster",
  },
};

export default nextConfig;
