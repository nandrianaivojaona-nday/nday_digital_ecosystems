import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Forces Turbopack to only look inside your 4.0 directory
    root: __dirname, 
  },
};

export default nextConfig;
