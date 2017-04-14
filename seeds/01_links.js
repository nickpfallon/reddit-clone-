
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {
          votes: 35,
          url: 'http://www.google.com',
          title: 'This is Google'
        },
        {
          votes: 14,
          url: 'http://www.yahoo.com',
          title: 'This is Yahoo'
        },
        {
          votes: -34,
          url: 'http://www.twitch.tv',
          title: 'Watch people play games and troll!'
        }
      ]);
    });
};
