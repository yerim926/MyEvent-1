"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const UserSchema = new Schema
({
    _id: Types.ObjectId,
    firstAndLastName:String,
    username: String,
    emailAddress: String,
    Birthday:Date,
    address:String,
    city:String,
    phoneNumber:Number,
    savedEvent:{
        _id: 
        {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "event",
        },

    },
    notInterestedEvent:{
        _id: 
        {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "event",
        },

    },

    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: "users"
});
UserSchema.plugin(passport_local_mongoose_1.default);
const Model = mongoose_1.default.model("User", UserSchema);
exports.default = Model;