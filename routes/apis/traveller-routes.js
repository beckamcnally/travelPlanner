const router = require("express").Router();
const {Location, Traveller, Trips} = require("../../models");

router.get('/', async (req, res) => {
  try {
    const travellerData = await Location.findAll({
      include: [{model: traveller}]
    });
    res.status(200).json(traveller);
  } catch (err) {res.status(500).json(err)}
});

router.get('/:id', async (req, res) => {
  try {
    const travellerData = await Location.findByPk(req.params.id, {
      include: [{model: traveller}]
    });
    if (!travellerData){
      res.status(404).json({ message: 'Not found'});
      return;
    }
    res.status(200).json(travellerData);
  } catch (err) {res.status(500).json(err)}
});

router.post('/', async (req, res) => {
  try {
    const travellerData = await Location.create({
      location_name: req.body
  });
    res.status(200).json(travellerData);
  } catch (err) {res.status(500).json(err)}
});

router.delete('/:id', async (req, res) => {
  try {
    const travellerData = await Location.destroy({
     where: {
      id: req.params.id
     }
  });
    res.status(200).json(travellerData);
  } catch (err) {res.status(500).json(err)}
});

module.exports = router;