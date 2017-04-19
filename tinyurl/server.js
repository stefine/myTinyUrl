/**
 * Created by 533 on 2017/4/12.
 */
var express = require("express");
var app =  express();
var redirectrouter = require("./routes/redirect");
var restrouter = require("./routes/rest");
var indexrouter = require("./routes/indexRouter");

// problem! if send /:shortUrl, indextrouter will work too?
// it will work
app.use("/public", express.static(__dirname + "/public"));
app.use("/", indexrouter);
app.use("/api/v1/urls", restrouter);
app.use("/:shortUrl", redirectrouter);

app.listen(3000);
