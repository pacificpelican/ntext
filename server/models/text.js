var mongoose = require('mongoose');
//  nText app by Dan McKeown | http://danmckeown.info/code/ntext
var TextSchema = new mongoose.Schema({
  text: { type: String, trim: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
mongoose.model('Text', TextSchema);

// Validation
TextSchema.path('text').required(true, "Some text is required");
