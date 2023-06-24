import express from 'express'
import { getFavorite } from '../controllers/FavoriteController.js'


const router = express.Router()

router.get('/favorie' , getFavorite)

export default router