const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  category: { type: String, required: true },
  name: { type: String, required: true },
  link: {type: String, required: false},
  teamID: { type: String, required: false },
  playerID: { type: String, required: false }
});


const saltRounds = 10;

UserSchema.pre('save', function(next) {
    // Check if document is new or a new password has ben set
    if (this.isNew || this.isModified('password')) {
      // Saving reference to this because of changing scopes
      const document = this;
      bcrypt.hash(document.password, saltRounds,
        function(err, hashedPassword) {
        if (err) {
          next(err);
        }
        else {
          document.password = hashedPassword;
          next();
        }
      });
    } else {
      next();
    }
})

UserSchema.methods.isCorrectPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}



const User = mongoose.model('User', UserSchema);

module.exports = User;
