module.exports = {
    multipleMongooseToObject: function(mongooseArrays){
        return mongooseArrays.map(mongooseArray => mongooseArray.toObject());
    },
    mongooseToObject: function(mongooseItem){
        return mongooseItem ? mongooseItem.toObject() : mongooseItem;
    }
}