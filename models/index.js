const Traveller = require('./Traveller');
const Location = require('./Location');
const Trips = require('./Trips');

Traveller.belongsToMany(Location, {
    through: "trips",
    foreignKey: "traveller_id"
});

Location.belongsToMany(Traveller, {
    through: "trips",
    foreignKey: "location_id"
});

module.exports = {
    Traveller,
    Location,
    Trips
}