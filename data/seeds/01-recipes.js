
exports.seed = function(knex) {
  // Deletes ALL existing entries
 
  
      return knex('recipes').insert([
        {recipe_name: 'Cheese Burger'},
        { recipe_name: 'Pizza'},
        { recipe_name: 'Scramble Egg'},
       
      ]);
   
      
};
