const { Schema, model } = require('mongoose');

const TemplateSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, 'User'},
    template_name: String,
    repo_urls: [ String ],
  }
);

module.exports = model('Template', TemplateSchema)