// 创建数据库
const mysql = require('mysql')

const conn = mysql.createConnection({
  host: '47.96.141.155',
  user: 'root',
  password: 'JLMRoot1234.1',
  database: 'minibook',
  useConnectionPooling: true
})

module.exports = conn