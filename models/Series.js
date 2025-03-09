import mongoose from "mongoose";

const seriesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Series", seriesSchema);
