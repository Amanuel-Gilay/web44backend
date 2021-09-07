
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('potluck_foods').del()
      .then(function () {
        // Inserts seed entries
        return knex('potluck_foods').insert([
          {
            potluck_id: '3',
            food_id: '2',
            assigned_user: 7,
          },
          {
            potluck_id: '2',
            food_id: '5',
            assigned_user: 4,
          },
          {
            potluck_id: '1',
            food_id: '4',
          },
          {
            potluck_id: '3',
            food_id: '1',
            assigned_user: 4,
          },
          {
            potluck_id: '3',
            food_id: '6',
          },
        ]);
      });
  };