const { Schema, model } = require('mongoose');

const RepoSchema = new Schema(
  {
    classroom_id: { type: Schema.Types.ObjectId, ref: 'Classroom'},
    repo_link: String,
    scores: [{
      student: String,
      done: Boolean,
      score: Number,
    }],
  }
)

module.exports = model('Repo', RepoSchema)