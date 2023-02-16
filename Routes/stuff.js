const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');

//all the routes of model Thing!

router.post('/',stuffCtrl.CreateThing);
router.get('/:id',stuffCtrl.getOneThing);
router.get('/',stuffCtrl.getAllThing);
router.put('/:id', stuffCtrl.updateThing);
router.delete('/:id', stuffCtrl.deleteThing);
 
module.exports = router;
