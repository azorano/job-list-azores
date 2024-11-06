const jobPostSchema = new mongoose.Schema({
  newPost: { type: Boolean, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salaryRange: { type: String },
  typeContract: { type: String, required: true },
  tags: { type: [String] },
  description: { type: String, required: true },
  island: { type: String, required: true },
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  easyApply: { type: Boolean, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});
jobPostSchema.index({ createdAt: 1 }, { expireAfterSeconds: 7776000 });
