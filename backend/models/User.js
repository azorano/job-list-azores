const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['candidate', 'employer'], required: true },
  profileImage: { type: String },
  createdAt: { type: Date, default: Date.now },
});
