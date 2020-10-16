const { Schema, model } = require('mongoose');

const ClassroomSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    classroom_name: String,
    description: String,
    // repo_ids: [{ type: Schema.Types.ObjectId, ref: 'Repo' }],
    students: [ String ]
  },
  { timestamp: true }
)

module.exports = model('Classroom', ClassroomSchema);
