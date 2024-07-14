import express, { Application } from "express";

const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
