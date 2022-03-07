const { route } = require("express/lib/application");

// API routes
let usercontroller = express.Router();

usercontroller
  .route("/usercontroller")
  .get(userControllerCtrl.findAlluserController)
  .post(userControllerCtrl.adduserController);

usercontroller
  .route("/usercontroler/:id")
  .get(userControllerCtrl.findById)
  .put(userControllerCtrl.updateuserController)
  .delete(userControllerCtrl.deleteuserController);

app.use("/api", userController);

module.export = router;