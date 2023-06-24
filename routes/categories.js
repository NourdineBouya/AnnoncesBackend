
import express from 'express'
import { getCategories , createCategorie } from '../controllers/categoriesController.js'
const router = express.Router()

router.get('/categories' , getCategories)
router.post('/categories' , createCategorie)

export default router