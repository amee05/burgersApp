const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:password@localhost/burgers_db')

module.exports = connection
