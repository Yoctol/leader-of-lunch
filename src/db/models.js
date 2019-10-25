const Bookshelf = require('bookshelf');

module.exports = db => {
  const bookshelf = new Bookshelf(db);
  const ModelBase = require('bookshelf-modelbase')(bookshelf);
  bookshelf.plugin(require('bookshelf-modelbase').pluggable);
  bookshelf.plugin(require('bookshelf-soft-delete'));

  const Channel = ModelBase.extend({
    tableName: 'channels',
    users: function(){
      return this.belongsToMany('User')
    },
    restaurants: function() {
      return this.hasMany(Restaurant);
    },
    elections: function() {
      return this.hasMany(Election);
    },
    restaurantNames: async function() {
      const restaurants = await this.restaurants().fetch();
      return restaurants.models.map(restaurant => restaurant.attributes.name);
    },
    lastElection: async function() {
      // return await optional(this.elections().orderBy('id', 'desc').fetchOne)
      try {
        return await this.elections()
          .orderBy('id', 'desc')
          .fetchOne();
      } catch (e) {
        if (e.message == 'EmptyResponse') {
          return null;
        } else {
          throw e;
        }
      }
    },
  });

  const Restaurant = ModelBase.extend({
    tableName: 'restaurants',
    soft: ['deleted_at'],
    channel: function() {
      return this.belongsTo(Channel);
    },
    electionOptions: function() {
      return this.hasMany(ElectionOption);
    },
  });

  const Election = ModelBase.extend({
    tableName: 'elections',
    channel: function() {
      return this.belongsTo(Channel);
    },
    electionOptions: function() {
      return this.hasMany(ElectionOption);
    },
    option: async function(index) {
      return await this.electionOptions()
        .query({ where: { index } })
        .fetchOne();
    },
  });

  const ElectionOption = ModelBase.extend({
    tableName: 'election_options',
    election: function() {
      return this.belongsTo(Election);
    },
    restaurant: function() {
      return this.belongsTo(Restaurant);
    },
    votes: function() {
      return this.hasMany(Vote);
    },
  });

  const User = ModelBase.extend({
    tableName: 'users',
    votes: function() {
      return this.hasMany(Vote);
    },
    lastVote: async function() {
      // return await optional(this.votes().orderBy('id', 'desc').fetchOne.bind(this))
      try {
        return await this.votes()
          .orderBy('id', 'desc')
          .fetchOne();
      } catch (e) {
        if (e.message == 'EmptyResponse') {
          return null;
        } else {
          throw e;
        }
      }
    },
  });

  const Vote = ModelBase.extend({
    tableName: 'votes',
    user: function() {
      return this.belongsTo(User);
    },
    electionOption: function() {
      return this.belongsTo(ElectionOption);
    },
  });

  return {
    Channel,
    Restaurant,
    Election,
    ElectionOption,
    User,
    Vote,
  };
};
