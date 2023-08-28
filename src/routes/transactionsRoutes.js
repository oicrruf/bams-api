import { Router } from 'express'
import { allTransactions, createTransaction, adjustTransaction} from '../controllers/transactionsController.js'

const router = Router()

router.get('/api/allTransactions', allTransactions)
router.post('/api/createTransaction', createTransaction)
router.put('/api/adjustTransaction/:id', adjustTransaction)



export default router