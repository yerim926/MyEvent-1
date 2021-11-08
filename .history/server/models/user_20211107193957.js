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
    _id:Types.ObjectId,
    firstAndLastName:
    {   type:String,
        require:true,

    },
    username: 
    {
        type:  String,
        require:true,

    },
    
    emailAddress:
    {
        type:String,
        require:true,

    },

    Birthday:
    {
        type:Date,
        require:true,
    },

    address:
    {
        type:String,
        require:true,
    },


    city:
    {
        type:String,
        require:true,

    },

    phoneNumber:
    {
        type:Number,
        require:true,

    },
    savedEvent:{
        _id: 
        {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Event",
        },
        default: Date.now()

    },
    notInterestedEvent:{
        _id: 
        {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Event",
        },

        default: Date.now()

    },

    created: {
        type: Date,
        default: Date.now()
    },

    updated: {
        type: Date,
        default: Date.now()
    },

    type: {
            type: String,
            enum: ["regular user", "VIP user", "event organizer"],
            default: "regular user",
        },
},

{
    collection: "users",
    timestamps: true,
});
UserSchema.plugin(passport_local_mongoose_1.default);
const Model = mongoose_1.default.model("User", UserSchema);
exports.default = Model;