import { Router } from "express";
import { getCondos, createCondos,updateCondos, deleteCondos } from "../controllers/condoControllers.js";

const router = Router();

router.get('/api/condos', getCondos)
router.post('/api/condos', createCondos)
router.put('/api/condos/:id', updateCondos)
router.delete('/api/condos/:id', deleteCondos)



export default router;