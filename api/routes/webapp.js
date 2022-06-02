const { urlencoded } = require("express");
var express = require("express");
var router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const axios = require("axios");
var dotenv = require("dotenv").config();

const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const redirect_uri = "http://localhost:3000/";
const scope = "user-top-read user-library-read user-read-private";

router.get("/", async (req, res, next) => {
  try {
    const url = new URL("https://accounts.spotify.com/authorize/");

    url.searchParams.append("response_type", "code");
    url.searchParams.append("client_id", client_id);
    url.searchParams.append("scope", scope);
    url.searchParams.append("redirect_uri", redirect_uri);
    //console.log(url);

    res.status(200).json({ url: url });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/callback", async (req, res, next) => {
  try {
    const code = req.query.code;

    const url =
      "https://accounts.spotify.com/api/token?grant_type=authorization_code&code=" +
      code +
      "&redirect_uri=" +
      redirect_uri;
    const headers = {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret, "utf8").toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    };
    fetch(url, { method: "post", headers: headers })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => {
        const obj = {
          token: data.access_token,
        };
        return obj;
      })
      .then((obj) => res.json(obj));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
