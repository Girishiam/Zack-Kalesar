import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.resolve(__dirname, '../public/Zacks_Football');
// We will overwrite or create new files in the same dir? 
// Let's create a 'optimized' subdirectory to keep it clean, or just overwrite/rename.
// User said "use proper image", so let's generate `.webp` versions which are smaller.

const processImages = async () => {
    if (!fs.existsSync(inputDir)) {
        console.error("Directory not found:", inputDir);
        return;
    }

    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png|JPG)$/)) {
            const inputPath = path.join(inputDir, file);
            const fileNameWithoutExt = path.parse(file).name;
            const outputPath = path.join(inputDir, `${fileNameWithoutExt}.webp`);

            try {
                const metadata = await sharp(inputPath).metadata();

                // Only resize if width is > 1920
                let pipeline = sharp(inputPath);
                if (metadata.width > 1920) {
                    pipeline = pipeline.resize(1920);
                }

                await pipeline
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`Optimized: ${file} -> ${fileNameWithoutExt}.webp`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }
    }
};

processImages();
