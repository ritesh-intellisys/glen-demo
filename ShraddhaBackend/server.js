import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import profileRoutes from "./routes/profile.routes.js";

dotenv.config();
const app = express();
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

// Middlewares
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow non-browser tools like Postman
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("CORS Not Allowed"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/uploads", express.static("uploads"));


// Error handlers
app.use(notFound);
app.use(errorHandler);

// Start server after DB connect
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
});
