module.exports = (mongoose) => {
    const userSchema = mongoose.Schema({
      username: {
        type: String
      },
      password: {
        type: String
      },
      name: {
        type: String
      }
    });
  
    return mongoose.model('user', userSchema);
};