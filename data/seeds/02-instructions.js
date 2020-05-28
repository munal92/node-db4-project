
exports.seed = function(knex) {
  // Deletes ALL existing entries
 
  
      return knex('instructions').insert([
        {recipe_id: 1,instruction:"burger instruction 1",step_id:1},
        {recipe_id: 1,instruction:"burger instruction 2",step_id:2},
        {recipe_id: 1,instruction:"burger instruction 3",step_id:3},
        {recipe_id: 2,instruction:"pizza instruction 1",step_id:1},
        {recipe_id: 2,instruction:"pizza instruction 2",step_id:2},
        {recipe_id: 2,instruction:"pizza instruction 3",step_id:3},
        {recipe_id: 2,instruction:"pizza instruction 4",step_id:4},
        {recipe_id: 2,instruction:"pizza instruction 5",step_id:5},
        {recipe_id: 3,instruction:"scramble egg instruction 1",step_id:1},
      ]);
   
      
};
