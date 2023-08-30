import { Router } from 'express'
import { createUsers, changeUsers, getUsers, deleteUsers, registerUser, loginUser } from '../controllers/usersController.js'

const router = Router()


router.get('/api/getUsers', getUsers)
router.post('/api/createUsers', createUsers)
router.put('/api/changeUsers/:id', changeUsers)
router.delete('/api/deleteUsers/:id', deleteUsers)

router.post('/api/register', registerUser)
router.post('/api/login', loginUser)

export default router