import { Router } from 'express'
import { allPaymentStatus, allPaymentTypes, createPaymentType, createPaymentStatus} from '../controllers/paymentsController.js'

const router = Router()

router.get('/api/allPayments', allPaymentTypes)
router.post('/api/createPaymentType', createPaymentType)
router.get('/api/payment_status/allStatus', allPaymentStatus)
router.post('/api/payment_status/createStatus', createPaymentStatus)





export default router