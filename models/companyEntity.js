import mongoose from 'mongoose';
import User from './userModel.js';
import masterClass from './materialsModel.js';

// COMPANY ENTITY
const companyEntity = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },  
        type: {
            type: String,
            // required: true,
        },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        Legacymaterials:[
            {
                type: String,
            }
        ], // Array of Materials name
        Properitarymaterials:[  
            {
                type: String,
            }
        ], // Array of Materials name
        location:{
            type: String,
            // required: true,
        },
        Address:{
            type: String,
            // required: true,
        },
        domain:{
            type: String,
        },
        Webpage:{
            type: String,
        },
        About:{
            type:String,
            // required: true, 
            minLength: 255, 
            maxLength: 500
        },
        Industry:{
            type:String,
        }
    },{
    timestamps:true
})

// COMPANY
const companySchema = new mongoose.Schema({
    name: {
      type: String,
    //   required: true,
    },
    entities: [
       { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompanyEntity',
       }
    ], // Array of sub-companies/entities
});
  
const Company = mongoose.model('Company', companySchema);
const CompanyEntity = mongoose.model('CompanyEntity', companyEntity)
export {CompanyEntity, Company}
