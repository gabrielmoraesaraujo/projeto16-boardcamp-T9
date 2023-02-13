import { categorieSchema } from "../schemas/categorie.Schema.js";
import { db } from "../database/database.js";


export async function validCategoriesSchema(req, res, next){

    const categorie = req.body;
    
    const {error} = categorieSchema.validate(categorie, {abortEarly: false});

    if(error){
        const errors = error.details.map(details => details.message); 
        return res.status(400).send({errors});
    }


    const categorieExist = await db.query("SELECT * FROM categories WHERE name=$1", [categorie.name]);

    if(categorieExist){
        return res.sandSatatus(400);
    }

    res.locals.categorie = categorie;

    next();
}