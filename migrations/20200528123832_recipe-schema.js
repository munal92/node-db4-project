exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('id')
        tbl.string('recipe_name',128).notNullable();
        
    })
    .createTable('instructions', tbl => {
    tbl.increments('id')
    tbl.string('instruction').notNullable()
    tbl.integer('step_id').notNullable()
    tbl.integer('recipe_id')
    .notNullable()
    .unsigned()
    .references('id')
    .inTable('recipes')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
  })
  
     .createTable('ingredients', tbl => {
         tbl.increments('id')
         tbl.string('ingredient_name',128).notNullable()
         tbl.float('quantity',128).notNullable()
     })
  
  .createTable('recipes_ingredients', tbl => {
       tbl.integer('recipe_id')
       .notNullable()
       .unsigned()
       .references('recipes.id')
       .onDelete('CASCADE')
       .onUpdate('CASCADE')
       tbl.integer('ingredient_id')
       .notNullable()
       .unsigned()
       .references('id')
       .inTable('ingredients')
       .onDelete('CASCADE')
       .onUpdate('CASCADE')
      tbl.primary(['recipe_id', 'ingredient_id'])
  })
  };
  
  
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExist('recipes_ingredients')
    .dropTableIfExist('ingredients')
    .dropTableIfExist('instructions')
    .dropTableIfExist('recipes')
  
  };
  