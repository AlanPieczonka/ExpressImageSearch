import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    searchTerm: { type: String, required: true, index: true },
  },
  { timestamps: true }
);

export default mongoose.model('SearchTerm', schema);