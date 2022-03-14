const { express } = require('express/lib/application');
const userController = require('../controllers/userController');

// API routes
const router = express.Router();

router.get('/', userController.findById);
router.post('/', userController.adduserController);
router.delete('/', userController.deleteuserController);
router.update('/', userController.updateuserController);

module.export = router;
