module.exports = {
    mutipleMongooseToObject: function(mongoosearrays){
        return mongoosearrays.map(mongoosearrays => mongoosearrays.toObject())
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }

}