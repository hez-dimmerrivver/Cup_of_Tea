import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const__filename = fileURLToPath(import.meta.url);
const__dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
