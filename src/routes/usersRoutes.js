import { Router } from 'express'
import { createUsers} from '../controllers/usersController.js'
//, changeUsers, getUsers, deleteUsers
const router = Router()

//router.get('/api/getUsers', getUsers)
router.post('/api/createUsers', createUsers)
//router.put('/api/changeUsers/:id', changeUsers)
//router.delete('/api/deleteUsers/:id_users', deleteUsers)



export default router