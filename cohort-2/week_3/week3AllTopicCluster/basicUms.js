const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { z } = require("zod");

const jwtPassword = "123456"; // Secret for JWT signing
const port = 3000;
const saltRounds = 10;
//pass:JByoERjrLbSVNpmP
// ✅ Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://mrx:pass@cluster0.klreadp.mongodb.net/basicUMS_DB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ✅ Mongoose Schema
const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
});

// ✅ Zod validation schema
const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email().refine((val) => val === val.toLowerCase(), {
    message: "Email must be lowercase only",
  }),
  password: z.string().min(6),
});

// ✅ Express App Setup
const app = express();
app.use(express.json());

// ✅ Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = userSchema.parse(req.body);

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    // Check if email already exists
    const existingEmail = await User.findOne({ email });

    let existingUser = null;
    
    // Provide specific feedback about what exists
    if (existingUsername && existingEmail) {
      return res.status(400).json({ msg: "Both username and email already exist" });
    } else if (existingUsername) {
      existingUser = existingUsername;
      return res.status(400).json({ msg: "Username already exists" });
    } else if (existingEmail) {
      existingUser = existingEmail;
      return res.status(400).json({ msg: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    return res.json({ msg: "User created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(400).json({ msg: error.issues || "Invalid input" });
  }
});

// ✅ Signin Route
app.post("/signin", async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({ username, email });
  if (!user) {
    return res.status(403).json({ msg: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(403).json({ msg: "Invalid credentials" });
  }

  const token = jwt.sign({ username }, jwtPassword, { expiresIn: "1h" });

  return res.json({ token });
});

// ✅ Protected route
app.get("/users", async (req, res) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.json({
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    return res.status(403).json({ msg: "Invalid or expired token" });
  }
});

// ✅ Server start
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
