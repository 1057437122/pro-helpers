"use strict";
exports.__esModule = true;
exports.newArea = void 0;
var models_1 = require("../models");
function newArea(body) {
    return new models_1.AreaModel(body);
}
exports.newArea = newArea;
