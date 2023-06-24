
import express from 'express'
import { getAnnonce , createAnnonce } from '../controllers/annoncesController.js'
const router = express.Router()

router.get('/annonces' , getAnnonce)
router.post('/annonces' , createAnnonce)

export default router