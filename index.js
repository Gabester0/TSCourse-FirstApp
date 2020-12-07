"use strict";
exports.__esModule = true;
var module_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
module_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
