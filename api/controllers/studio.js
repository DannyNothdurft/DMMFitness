import Studio from "../models/Studio.js";
import Room from "../models/Room.js";

export const createStudio = async (req, res, next) => {
  const newStudio = new Studio(req.body);

  try {
    const savedStudio = await newStudio.save();
    res.status(200).json(savedStudio);
  } catch (err) {
    next(err);
  }
};
export const updateStudio = async (req, res, next) => {
  try {
    const updatedStudio = await Studio.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedStudio);
  } catch (err) {
    next(err);
  }
};
export const deleteStudio = async (req, res, next) => {
  try {
    await Studio.findByIdAndDelete(req.params.id);
    res.status(200).json("Studio has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getStudio = async (req, res, next) => {
  try {
    const studio = await Studio.findById(req.params.id);
    res.status(200).json(studio);
  } catch (err) {
    next(err);
  }
};
export const getStudios = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const studios = await Studio.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(studios);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
 
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Studio.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
 export const countByType = async (req, res, next) => {
  try {
    const groupCount = await Studio.countDocuments({ type: "Group Workout" });
    const personalCount = await Studio.countDocuments({ type: "Personal Training" });
    const hiitCount = await Studio.countDocuments({ type: "HIIT Workout" });
    const spinningCount = await Studio.countDocuments({ type: "Spinning" });
    const yogaCount = await Studio.countDocuments({ type: "Yoga" });

    res.status(200).json([
      { type: "Group Workout", count: groupCount },
      { type: "Personal Training", count: personalCount },
      { type: "HIIT Workout", count: hiitCount },
      { type: "Spinning", count: spinningCount },
      { type: "Yoga", count: yogaCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getStudioRooms = async (req, res, next) => {
  try {
    const hotel = await Studio.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};