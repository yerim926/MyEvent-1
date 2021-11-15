let mongoose = require('mongoose');

let EventModel = mongoose.Schema
({
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

module.exports = mongoose.model("Event", EventModel);