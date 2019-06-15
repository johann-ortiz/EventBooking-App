const authResolver = require("./auth");
const eventsResolvers = require("./events");
const bookingsResolver = require("./bookings");

const rootResolver = {
  ...authResolver,
  ...eventsResolvers,
  ...bookingsResolver
};

module.exports = rootResolver;
