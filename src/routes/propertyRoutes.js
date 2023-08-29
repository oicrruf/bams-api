import { Router } from "express";
import { getProperty, createProperty, updateProperty, deleteProperty } from "../controllers/propertyControllers.js";

const router = Router();

router.get('/api/property', getProperty)
router.post('/api/property', createProperty)
router.put('/api/property/:id', updateProperty)
router.delete('/api/property/:id', deleteProperty)



export default router;