const router = require("express").Router();
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM admin WHERE username=?",
    [username],
    async (err, result) => {
      if (result.length === 0)
        return res.status(404).json("User not found");

      const valid = await bcrypt.compare(
        password,
        result[0].password
      );

      if (!valid)
        return res.status(400).json("Wrong password");

      const token = jwt.sign(
        { id: result[0].id },
        process.env.JWT_SECRET
      );

      res.json({ token });
    }
  );
});

module.exports = router;