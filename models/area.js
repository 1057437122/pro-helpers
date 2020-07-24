"use strict";
var _this = this;
exports.__esModule = true;
exports.AreaModel = void 0;
var mongoose = require("mongoose");
var mongodb_1 = require("mongodb");
var AreaSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    flag: {
        // for localize
        type: String,
        trim: true,
        required: function () {
            return _this.parentId;
        }
    },
    parentId: {
        type: mongodb_1.ObjectId,
        ref: 'Area'
    },
    isDeleted: {
        type: Boolean,
        "default": false
    }
}, { timestamps: true, toJSON: { virtuals: true } });
AreaSchema.virtual('parent', {
    ref: 'Area',
    localField: 'parentId',
    foreignField: '_id',
    justOne: true
});
// we have to create a Validate function!!
var AreaModel = mongoose.model('Area', AreaSchema);
exports.AreaModel = AreaModel;
