module.exports = (mongoose) => {
    const jornalSchema = mongoose.Schema({
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