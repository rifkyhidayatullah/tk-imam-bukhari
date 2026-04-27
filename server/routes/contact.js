const router = require("express").Router();
const db = require("../config/db");

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  db.query(
    "INSERT INTO contact(name,email,message) VALUES (?,?,?)",
    [name, email, message],
    () => {
      res.json("Message Sent");
    }
  );
});

module.exports = router;