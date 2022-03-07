let mongoose = require ("mongoose");
let {Schema} = mongoose;

let model = new Schema({
    nombre: {type: String},
    contrasenia: {type: String}
});

module.export = mongoose.model("modeluser", model);