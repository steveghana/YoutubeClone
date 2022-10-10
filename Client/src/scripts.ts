import path from "path";
import fs from "fs";

export const generateSeedData = async () => {
  return await fs.readFile(
    path.join(__dirname, "./Youtube/home.json"),
    (err, res) => {
      console.log(res);
    }
  );
};
