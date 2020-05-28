const express = require('express');

const DbRecipe = require('./db-helper.js');
const router = express.Router();

router.use((req,res,next) => {
    console.log('In Recipe Router')
    next();
})

router.get('/', async (req,res) => {

  const recipe =  await DbRecipe.getRecipes()
  try{
res.status(200).json(recipe);
  }catch(err){
res.status(500).json({error: "Server error", err:err})
  }

})
router.get('/:id/instructions', async (req,res) => {
    const {id} = req.params
    const recipe =  await DbRecipe.getInstructions(id)
    try{
  res.status(200).json(recipe);
    }catch(err){
  res.status(500).json({error: "Server error", err:err})
    }
  
  })
  router.get('/:id/shoppinglist', async (req,res) => {
    const {id} = req.params
    console.log(id)
    const recipe =  await DbRecipe.getShoppingList(id)
    try{
  res.status(200).json(recipe);
    }catch(err){
  res.status(500).json({error: "Server error", err:err})
    }
  
  })

  




module.exports = router;