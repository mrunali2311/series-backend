import Series from "../models/Series.js";

export const getAllSeries = async (req, res) => {
  try {
    const series = await Series.find();
    res.status(200).json(series);
  } catch (error) {
    res.status(500).json({ message: "Error fetching series" });
  }
};

export const createSeries = async (req, res) => {
  const { title, description, genre, releaseDate } = req.body;

  try {
    const newSeries = new Series({ title, description, genre, releaseDate });
    await newSeries.save();
    res.status(201).json(newSeries);
  } catch (error) {
    res.status(500).json({ message: "Error creating series" });
  }
};
