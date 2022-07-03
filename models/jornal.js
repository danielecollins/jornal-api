const { ObjectId } = require("mongodb");

module.exports = (mongoose) => {
    const jornalSchema = mongoose.Schema({
      _id: {
        type: ObjectId
      },
      username: {
        type: String
      },
      entry: {
        type: String
      },
      entryDate: {
        type: Date
      }
    });
  
    return mongoose.model('jornal', jornalSchema);
};