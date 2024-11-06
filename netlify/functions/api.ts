import express, { Router } from "express";
import serverless from "serverless-http";

const app = express();
const router = Router();

// Define the route that will respond with 'Hello World!'
router.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// Mount the router on the Express app
app.use("/.netlify/functions/api", router);

// Export the handler for Netlify to use
export const handler = serverless(app);
