const mongodb = require('mongodb');
const db = mongodb.MongoClient;
const url = 'mongodb://danielsin:peru2019@cluster-shard-00-00.cvrfp.mongodb.net:27017,cluster-shard-00-01.cvrfp.mongodb.net:27017,cluster-shard-00-02.cvrfp.mongodb.net:27017/emerson?ssl=true&replicaSet=atlas-tm2jhe-shard-0&authSource=admin&retryWrites=true&w=majority';
// const {leerExcel} = './llenado.js'

db.connect(url, (err, con) => {
    const XLSX = require('xlsx')
    // const fs = require('fs')
    // const {conectar} = require('./database.js')
    
    // let content = ''
    
    const leerExcel = (ruta) => {
        const workBook = XLSX.readFile(ruta)
        const workBookSheets = workBook.SheetNames;
        const [sheet] = workBookSheets
        const data = XLSX.utils.sheet_to_json(workBook.Sheets[sheet])
        return data
    }

    // si existe error salir
    if(err) return process.exit(1);

    // alumnos
    const instrumentos = leerExcel('instrumentos.xlsx')
    console.log(instrumentos);
    console.log('insertando datos...');

    // insertar alumnos
    con.db('mantenimiento').collection('instrumentos').insertMany(instrumentos, (err, doc) => {
        if(err) {
                console.log(err.toString());
            return process.exit(1);}
        console.log('documentos insertados', doc.ops);
        process.exit(0);
    });

});