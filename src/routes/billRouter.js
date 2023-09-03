import { Router } from 'express'
import {viewBill, billingHistory, paymentHistory, paymentArrangement, viewCredits, viewCharges, movementHistory} from '../controllers/billGetController.js'
import {submitCredit,submitCharge,makePayment,uploadBill,addToBill,postBill,savePaymentMethod,takePayment } from '../controllers/billPostController.js'
const router = Router()

router.get('/bill/viewBill/:month', viewBill)
router.get('/bill/billingHistory', billingHistory)
router.get('/bill/movementHistory', movementHistory)
router.get('/bill/paymentArrangement', paymentArrangement)
router.get('/bill/paymentHistory', paymentHistory)
router.get('/bill/viewCredits', viewCredits)
router.get('/bill/viewCharges', viewCharges)

router.post('/bill/submitCredit', submitCredit)
router.post('/bill/submitCharge', submitCharge)
router.post('/bill/uploadBill', uploadBill)
router.post('/bill/makePayment', makePayment)
router.post('/bill/addToBill', addToBill)
router.post('/bill/savePaymentMethod', savePaymentMethod)
router.post('/bill/takePayment', takePayment)










export default router