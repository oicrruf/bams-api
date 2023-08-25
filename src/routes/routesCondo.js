import { Router } from "express";
import { getCondos, createCondos,updateCondos } from "../controllers/controllerCondo.js";

const router = Router();

router.get('/api/condos', getCondos)
router.post('/api/condos', createCondos)
router.put('/api/condos', updateCondos)



export default router;