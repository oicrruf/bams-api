import { Router } from 'express'
import { getRole, createRole, changeRole, deleteRole } from '../controllers/roleControllers.js'

const router = Router()


router.get('/api/getRole', getRole)
router.post('/api/createRole', createRole)
router.put('/api/changeRole/:id', changeRole)
router.delete('/api/deleteRole/:id', deleteRole)

export default router