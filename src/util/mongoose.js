module.exports = {
    multipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function(mongooseItem){
        return mongooseItem ? mongooseItem.toObject() : mongooseItem;
    }
}