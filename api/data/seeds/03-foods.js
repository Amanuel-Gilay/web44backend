
exports.seed = function(knex) {
    return knex('foods').del()
      .then(function () {
        return knex('foods').insert([
          {
            food_name: 'Pineapple', 
            food_description: 'part pine, part apple'
          },
          {
            food_name: 'Sweet Potatoes', 
            food_description: 'mashed?  fried?  u choose'
          },
          {
            food_name: 'Pizza', 
            food_description: 'Veeeeegan pls'
          },
          {
            food_name: 'LaCroix', 
            food_description: ''
          },
          {
            food_name: 'Masala', 
            food_description: 'better make me sweat'
          },
          {
            food_name: 'Ramen', 
            food_description: ''
          },
        ]);
      });
  };