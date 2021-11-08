"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const EventSchema = new Schema
({
    _id: Types.ObjectId,
    eventName: 
    {
        type:String,
        required:true
    },
    
    eventOrganizer:
    {
        type:String,
        required:true
    },

    eventStartTime:
    {
        type:Date,
        required:true
    },

    eventEndTime:
    {
        type:Date,
        required:true
    },

    location:
    {
        type:String,
        required:true
    },

    price: 
    {
        type:Number,
        required:true

    },

    description:
    {  
         type:String,
        required:true

    },
    
    tags:
    {
        type:String,
        enum: ["onlineEvents", "FoodAndDrink", "Health","Game","Music","Dance","Education","Children","Parents","Technology","Career"],
       

    }

    
},
 {
    collection: "events"
});
const Model = mongoose_1.default.model("Event", EventSchema);
exports.default = Model;