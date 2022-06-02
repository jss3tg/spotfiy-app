const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
var dotenv = require("dotenv").config();

/* GET users listing. */
router.get("/likedsongs/", async (req, res, next) => {
  try {
    console.log(req.query.token);
    const url = "https://api.spotify.com/v1/me/tracks?offset=0&limit=5";
    const data = await fetch(url, {
      headers: { Authorization: "Bearer " + req.query.token },
    })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => data);

    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/topsongs", async (req, res, next) => {
  try {
    console.log(req.query.token);
    const url = "https://api.spotify.com/v1/me/top/tracks?offset=0&limit=5";
    const data = await fetch(url, {
      headers: { Authorization: "Bearer " + req.query.token },
    })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => data);

    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/topartists", async (req, res, next) => {
  try {
    console.log(req.query.token);
    const url = "https://api.spotify.com/v1/me/top/artists?offset=0&limit=5";
    const data = await fetch(url, {
      headers: { Authorization: "Bearer " + req.query.token },
    })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => data);

    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
