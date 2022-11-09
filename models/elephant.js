const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
elephant_type: String,
elephant_age_limit: Number,
elephant_weight: Number
})
module.exports = mongoose.model("Elephant",
elephantSchema)