const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.get('/getUser/:userId', userController.getUser);
router.post('/addUser', userController.adduser);
router.delete('/deleteUser/:userId', userController.deleteuser);
router.put('/updateUser/:userId', userController.updateuser);

module.export = router;
