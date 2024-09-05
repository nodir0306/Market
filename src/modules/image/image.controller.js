import { createReadStream, readFileSync } from "fs";
import path from "path";

class homeImageController {
  constructor() {}

  getHomeImages = async (req, res, next) => {
    try {
      const fileTypes = JSON.parse(
        readFileSync(
          path.join(process.cwd(), "src", "constants", "file.types.constant.json")
        )
      );

      const { image } = req.params;
      const imagePath = path.join(process.cwd(), "uploads", image);
      const imageExt = path.extname(imagePath);

      res.setHeader("Content-Type", fileTypes[imageExt]);

      const imageStream = createReadStream(imagePath);
      imageStream.pipe(res);
    } catch (error) {
      next(error);
    }
  };
}

export default new homeImageController();