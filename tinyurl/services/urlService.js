/**
 * Created by 533 on 2017/4/12.
 */
// shortUrlsMap {longurl:shorturl}
// longUrlsMap  {shorturl:longurl}
var shortUrlsMap = {};
var longUrlsMap = {};

var getLongUrl = function (shorturl) {
    if (longUrlsMap[shorturl] != null) {
        return longUrlsMap[shorturl];
    }else{
        return null;
    }
};

var getShortUrl = function (longUrl) {
    if (shortUrlsMap[longUrl] == null){
        var shortUrl = gernerateShortUrl();
        shortUrlsMap[longUrl] = shortUrl;
        longUrlsMap[shortUrl] = longUrl;
    }
    return shortUrlsMap[longUrl];
};

var gernerateShortUrl = function () {
    return Object.keys(shortUrlsMap).length;
};

module.exports={
    getLongUrl:getLongUrl,
    getShortUrl:getShortUrl
};



