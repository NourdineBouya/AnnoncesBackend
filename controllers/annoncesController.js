import asyncHandler  from 'express-async-handler'
import Annonce from '../models/Annonce.js'
 

// GET request 
// Retrive all Annonce
const getAnnonce = asyncHandler (async (req , res) => {
  const annonces = await Annonce.find()
        res.status(200).json(annonces) 
    }   
)

// POST request 
// Create each Categorie
const createAnnonce = asyncHandler (async (req , res) => {
  const {name, descreption, salaire} =  req.body

  const annonce = await Annonce.create({
    name,
    descreption,
     salaire
  })
  if(annonce)
  {
    res.status(201).json({
        _id : annonce._id,
        name : annonce.name
    })
  }
}   
 )
export {
    getAnnonce,
   createAnnonce
}