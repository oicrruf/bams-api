import { Router } from 'express'
import { createUsers, changeUsers, getUsers, deleteUsers, registerUser, loginUser, getUserData } from '../controllers/usersController.js'
import { protect }  from '../middleware/authmiddleware.js'

const router = Router()


router.get('/api/getUsers', getUsers)
router.post('/api/createUsers', createUsers)
router.put('/api/changeUsers/:id', changeUsers)
router.delete('/api/deleteUsers/:id', deleteUsers)

router.post('/api/register', registerUser)
router.post('/api/login', loginUser)
router.get('/api/getMe', protect, getUserData)

export default router