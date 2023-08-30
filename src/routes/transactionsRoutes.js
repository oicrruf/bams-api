import { Router } from 'express'
import { allTransactions, createTransaction, adjustTransaction, transactionTypes, allTransactionTypes, adjustTransactionType} from '../controllers/transactionsController.js'

const router = Router()

router.get('/api/allTransactions', allTransactions)
router.post('/api/createTransaction', createTransaction)
router.put('/api/adjustTransaction/:id', adjustTransaction)
router.post('/api/transaction_type/createTT', transactionTypes)
router.get('/api/transaction_type/allTT', allTransactionTypes)
router.patch('/api/transaction_type/adjustTT/:id', adjustTransactionType)





export default router