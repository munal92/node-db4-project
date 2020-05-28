const express = require('express');
const dbIng = require('./db-helper.js');
const router = express.Router();


router.use((req,res,next) => {
    console.log('In Ingredient Router')
    next();
})

router.get('/:id/recipes', async (req,res) => {
    const {id} = req.params
    const recipe =  await dbIng.findIngredientsInRecipes(id)
    try{
  res.status(200).json(recipe);
    }catch(err){
  res.status(500).json({error: "Server error", err:err})
    }
  
  })



module.exports = router;