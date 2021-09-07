exports.seed = function(knex) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
          {username: 'RZA', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111
          {username: 'GZA', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111
          {username: 'ODB', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111
          {username: 'Method Man', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111
          {username: 'Raekwon', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111
          {username: 'Ghostface Killah', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111
          {username: 'Inspectah Deck', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111
          {username: 'U-God', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111
          {username: 'Masta Killa', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111
          {username: 'Cappadonna', password: '$2a$08$Xb7EQmJMNPvJxZuvMUvm7OXSYQFC/uLtn3DpgoKk1JZpOVLT2DhC6'},//password = 1111
        ]);
      });
  };