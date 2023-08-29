import { Router } from 'express'
import { createUsers, changeUsers, getUsers, deleteUsers } from '../controllers/usersController.js'

const router = Router()


router.get('/api/getUsers', getUsers)
router.post('/api/createUsers', createUsers)
router.put('/api/changeUsers/:id', changeUsers)
router.delete('/api/deleteUsers/:id', deleteUsers)

export default router