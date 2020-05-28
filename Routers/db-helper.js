const  db = require('../data/db-config.js');


function getRecipes(){
    return db('recipes')
}

function getShoppingList(id){
    return db('ingredients as i')
    .join('recipes_ingredients as ri','ri.ingredient_id', 'i.id')
    // .join ('recipes as r' ,'r.id','ri.recipe_id')
    .select('i.quantity','i.ingredient_name as ingredient name')
     .where('ri.recipe_id',id)
}

function getInstructions(id){
    return db('recipes as r')
    .join('instructions as i','i.recipe_id','r.id')
    .select('r.recipe_name','i.instruction','i.step_id as Step')
    .where('r.id',id)
}


function findIngredientsInRecipes(id){
        return db('recipes_ingredients as ri')
        .join('recipes as r', 'ri.recipe_id','r.id')
        .select('r.recipe_name')
        .where('ri.ingredient_id',id) 
}



module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    findIngredientsInRecipes
}