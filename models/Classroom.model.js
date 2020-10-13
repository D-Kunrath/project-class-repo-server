const { Schema, model } = require('mongoose');

const ClassroomSchema = new Schema(
  {
    teacher: { type: Schema.Types.ObjectId, ref: 'User' },
    assistants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    className: String,
    summary: String,
    students: [],
    repos: [],
  }
  { timestamp: true }
)

module.exports = model('Classroom', ClassroomSchema);
