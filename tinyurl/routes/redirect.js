/**
 * Created by 533 on 2017/4/12.
 */
// /:shorturl
// redirectrouter
// get
// json_data {longurl:longurl}
var express = require("express");
var router = express.Router();
var service = require("../services/urlService");

router.get("*", function (req, res) {
    var shortUrl = req.originalUrl.slice(1);
    console.log("shortUrl is: " + shortUrl);
    if (shortUrl != null){
        var longUrl = service.getLongUrl(shortUrl);
        res.redirect(longUrl);
    }
});

module.exports = router;
