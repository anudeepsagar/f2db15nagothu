const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
elephant_type: String,
elephant_age_limit: Number,
elephant_weight: {
    type:Number,
    min: 4000,
    max: 20000}
})

module.exports = mongoose.model("Elephant",elephantSchema)