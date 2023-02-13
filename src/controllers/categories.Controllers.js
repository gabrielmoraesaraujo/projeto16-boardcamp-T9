export async function create(req, res){

    const categories = res.locals.categories;

    try{

    } catch(err){
        res.status(500).sand(err.massage);
    }
}

export async function findAll(req, res){

}