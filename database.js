var mongoose = require('mongoose');
const conectar = () => {
    mongoose.Promise = global.Promise
    

        //mongoose.connect(`${process.env.DB_CONNECTION_STRING}`)
        //Considerar esta cadena de conexion en casos donde no tendamos internet
        mongoose.connect(`mongodb+srv://admin:admin@cluster0.ffhlojp.mongodb.net/?retryWrites=true&w=majority`)
        console.log('conexion exitosa')
    
    // export default mongooseConnect
}
module.exports  = {conectar}