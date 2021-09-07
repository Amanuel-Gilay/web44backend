
exports.seed = function(knex) {
    return knex('potlucks').del()
      .then(function () {
        return knex('potlucks').insert([
          {
            potluck_name: 'Tasty Foodz Partay',
            organizer: '3',
            potluck_description: 'bring the tastiest food pls.  NO BAD FOOD',
            potluck_date: '2021/07/15',
            potluck_time: '06:00:00',
            potluck_location: '1403 Park Ave, Long Beach CA'
          },
          {
            potluck_name: 'Yum Yum Food Time',
            organizer: '1',
            potluck_description: 'yumyumyumyumyumyumyum',
            potluck_date: '2021/08/20',
            potluck_time: '05:00:00',
            potluck_location: '1111 E 2222 S, SLC UT'
          },
          {
            potluck_name: 'MM..FOOD',
            organizer: '5',
            potluck_description: 'got more cheese than doritos, cheetos, or fritos',
            potluck_date: '2021/07/28',
            potluck_time: '07:30:00',
            potluck_location: '45 S 5th Ave, New York NY'
          },
        ]);
      });
  };