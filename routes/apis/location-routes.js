const router = require("express").Router();
const {Location, Traveller, Trips} = require("../../models");

router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll({
      include: [{model: location}]
    });
    res.status(200).json(locationData);
  } catch (err) {res.status(500).json(err)}
});

router.get('/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [{model: Location}, {model: Trips}],
      where: {
        id: req.params.id
      }
      
    });
    if (!locationData){
      res.status(404).json({ message: 'Not found'});
      return;
    }
    res.status(200).json(locationData);
  } catch (err) {res.status(500).json(err)}
});

router.post('/', async (req, res) => {
  try {
    const locationData = await Location.create({
      location_name: req.body
  });
    res.status(200).json(locationData);
  } catch (err) {res.status(500).json(err)}
});

router.delete('/:id', async (req, res) => {
  try {
    const locationData = await Location.destroy({
     where: {
      id: req.params.id
     }
  });
    res.status(200).json(locationData);
  } catch (err) {res.status(500).json(err)}
});


module.exports = router;