const router = require("express").Router();
const travellerRoutes = require("./traveller-routes");
const locationRoutes = require("./location-routes");
const tripsRoutes = require("./trips-routes");

router.use("/traveller", travellerRoutes);
router.use("/location", locationRoutes);
router.use("/trips", tripsRoutes);

module.exports = router;

