import express from "express";
import {
  countByCity,
  countByType,
  createStudio,
  deleteStudio,
  getStudio,
  getStudioRooms,
  getStudios,
  updateStudio,
} from "../controllers/studio.js";
import Studio from "../models/Studio.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createStudio);

//UPDATE
router.put("/:id", verifyAdmin, updateStudio);
//DELETE
router.delete("/:id", verifyAdmin, deleteStudio);
//GET

router.get("/find/:id", getStudio);
//GET ALL

router.get("/", getStudios);
router.get("/countByCity", countByCity);
 router.get("/countByType", countByType);
router.get("/room/:id", getStudioRooms);

export default router;