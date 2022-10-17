const XLSX = require('xlsx')
const fs = require('fs')
const {conectar} = require('./database.js')

let content = ''

const leerExcel = (ruta) => {
    const workBook = XLSX.readFile(ruta)
    const workBookSheets = workBook.SheetNames;
    const [sheet] = workBookSheets
    const data = XLSX.utils.sheet_to_json(workBook.Sheets[sheet])
    for (const itemFila of data){
        // console.log(itemFila);
        content += `{ name:'${itemFila['name']}'},\n`
    }
    try {
        // const data = fs.writeFileSync('test.txt', content)
        // console.log('file written successfully')
    } catch (err) {
        console.error(err)
    }
}
conectar();
leerExcel('instrumentos.xlsx')