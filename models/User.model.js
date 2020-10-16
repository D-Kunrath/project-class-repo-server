const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    git_user: String,
    email: { type: String, required: true },
    passwordHash: String,
    git_access: String,
  },
  { timestamp: true }
)

module.exports = model('User', UserSchema);
