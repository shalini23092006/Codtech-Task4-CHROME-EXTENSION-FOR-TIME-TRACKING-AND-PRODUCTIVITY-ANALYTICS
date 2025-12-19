const express = require("express");
const router = express.Router();
const Usage = require("../models/Usage");

const productiveSites = ["github.com", "stackoverflow.com", "w3schools.com"];

router.post("/usage", async (req, res) => {
  const { domain, timeSpent } = req.body;
  const category = productiveSites.includes(domain)
    ? "Productive"
    : "Unproductive";

  await Usage.create({ domain, timeSpent, category });
  res.json({ message: "Usage stored" });
});

router.get("/weekly-report", async (req, res) => {
  const data = await Usage.find();
  res.json(data);
});

module.exports = router;
