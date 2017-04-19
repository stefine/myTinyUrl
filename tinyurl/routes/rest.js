/**
 * Created by 533 on 2017/4/12.
 */
// /api/v1/urls/longurl
// restrouter
// post
// json_data {longurl:longurl shorturl:shorturl}
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var service = require("../services/urlService");

router.post("/", jsonParser, function (req, res) {
    var longUrl = req.body.longUrl;
    console.log("longurl is: " + longUrl);
    if (longUrl != null){
        var shortUrl = service.getShortUrl(longUrl);
        res.json({
            longUrl:longUrl,
            shortUrl:shortUrl
        });
    }
});

router.get("/:shortUrl", function (req, res) {
    var shortUrl = req.params.shortUrl;
    var longUrl = service.getLongUrl(shortUrl);
    res.json({
        longUrl:longUrl,
        shortUrl:shortUrl
    });
});

router.get("/:shortUrl/:info", function (req, res) {
    res.json(11);
});

module.exports = router;