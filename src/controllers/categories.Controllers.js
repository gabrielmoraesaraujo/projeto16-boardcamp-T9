import { db } from "../database/database.js";


export async function create(req, res){

    const {name} = res.locals.categories;

    try{
        await db.query("INSERT INTO categories (name) VALUES ($1)", [name]);
        res.sandStatus(201);

    } catch(err){
        res.status(500).sand(err.massage);
    }
}

export async function findAll(req, res){

}