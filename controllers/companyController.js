import asyncHandler from "express-async-handler";
import { Company, CompanyEntity } from "../models/companyEntity.js";

// Add Company Details - POST
const addCompany = asyncHandler(async(req, res) => {
    console.log("Add Company")
    try {
        const { name } = req.body; // Assuming you provide the company name and entities in the request body
        // saving Company
        const newCompany = new Company({
            name,
        });  
        const savedCompany = await newCompany.save();
        return res.status(200).json(savedCompany);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error adding the company.' });
    }
})

// Add Company Entity - POST
// const addCompanyEntity
const addCompanyEntity = asyncHandler(async(req, res) => {
    const { name, CompanyName } = req.body; 
    try{
        // Add to Company Collection
        var company = await Company.findOne({name:CompanyName});
        console.log("TRY")
        if (!company) {
            return res.status(404).json({ message: 'Company not found.' });
        }
        console.log(company)
        // Add Entity details to Company
        const companyEntity = new CompanyEntity({
            name:name
        })
        await companyEntity.save();
        await company.entities.push(companyEntity._id)
        await company.save()
        return res.status(200).json({companyEntity, company});
    }catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error adding the company Entity.' });
    }
})


export {addCompany, addCompanyEntity}