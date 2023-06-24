import mongoose from 'mongoose'

const AnnonceSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    descreption : {
        type : String,
        required : true
    },
    salaire : {
        type : Number,
        required : true
    },
    
})

const Annonce = mongoose.model('Annonce' , AnnonceSchema)

export default Annonce