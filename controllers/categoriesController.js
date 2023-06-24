import asyncHandler  from 'express-async-handler'
import Categorie from '../models/Categories.js'

// GET request 
// Retrive all Categorie
const getCategories = asyncHandler (async (req , res) => {
        res.status(200).json()
    }   
)

// POST request 
// Create each Categorie
const createCategorie = asyncHandler (async (req , res) => {
  const {name} =  req.body

  const categorie = await Categorie.create({
    name
  })
  if(categorie)
  {
    res.status(201).json({
        _id : categorie._id,
        name : categorie.name
    })
  }
}   
)
export {
    getCategories,
    createCategorie
}