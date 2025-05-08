const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("WELCOME T0 M-VASTRA API!");
});

// API Routes
app.use("/api/users", userRoutes);

// POSTMAN invite link
// https://app.getpostman.com/join-team?invite_code=abc759033362ee7f4e0bcb2bd4fdc1856eee6326990637834252e20a870adf31

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
