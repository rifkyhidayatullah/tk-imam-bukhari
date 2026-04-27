const router = require("express").Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM news ORDER BY id DESC",
    (err, result) => {
      res.json(result);
    });
});

router.post("/", (req, res) => {
  const { title, content } = req.body;

  db.query(
    "INSERT INTO news(title,content) VALUES (?,?)",
    [title, content],
    () => {
      res.json("News Added");
    }
  );
});

router.delete("/:id", (req, res) => {
  db.query(
    "DELETE FROM news WHERE id=?",
    [req.params.id],
    () => {
      res.json("Deleted");
    }
  );
});

module.exports = router;