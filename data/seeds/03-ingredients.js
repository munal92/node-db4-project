
exports.seed = function(knex) {
  // Deletes ALL existing entries
 
  
      return knex('ingredients').insert([
        {ingredient_name: 'Sausage',quantity:1.2},
        { ingredient_name: 'Tomato',quantity:2},
        { ingredient_name: 'Onion',quantity:1},
        { ingredient_name: 'Pepper',quantity:0.2},
        { ingredient_name: 'Salt',quantity:0.5},
        { ingredient_name: 'Dough',quantity:1},
        { ingredient_name: 'Egg',quantity:3}
      ]);
   
      
};
