const mysql = require('mysql')
const config = require('./config')
const promise = require('bluebird')

let connection

class DB {
  getConnection () {
    return new promise((resolve, reject) => {
      connection = mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database,
        charset:config.db.charset           //To allow emoji
      })

      connection.connect((err) => {
        if (err) {
          console.error('error connecting: ' + err.stack)
          reject('Error while connectiong database !')
        }
        console.log('connected to ' + connection.config.database + ' database')
        resolve('Database Connected !')
      })
    })
  }

  select (table, selectParams, condition) {
    return new promise((resolve, reject) => {
      let query = `SELECT ${selectParams} FROM ${table} WHERE ${condition}`
      console.log('\n\n\n', query, '\n\n\n')
      connection.query(query, (error, results, fields) => {
        if (error) {
          console.log(error)
          reject('DB_ERROR')
        } else {
          resolve(results)
        }
      })
    })
  }

  insert (table, body) {
    return new promise((resolve, reject) => {
      let query = `INSERT INTO ${table} SET ? `
      console.log(query);
      connection.query(query, body, (error, results) => {
        if (error) {
          console.log(error)
          reject('DB_ERROR')
        } else {
          resolve(results)
        }
      })
    })
  }

  update (table, condition, body) {
    console.log('\n\n IN UPDATE');
    return new promise((resolve, reject) => {
      let query = `UPDATE ${table} SET ? WHERE ${condition}`
      console.log(query);
      connection.query(query, body, (error, results) => {
        if (error) {
          console.log(error)
          reject('DB_ERROR')
        } else {
          resolve(results)
        }
      })
    })
  }

  customUpdate (table, condition, body) {
    return new promise((resolve, reject) => {
      let query = `UPDATE ${table} SET ${body} WHERE ${condition}`
      console.log('\n\n\n', query, '\n\n\n')
      connection.query(query, (error, results) => {
        if (error) {
          console.log(error)
          reject('DB_ERROR')
        } else {
          resolve(results)
        }
      })
    })
  }

  delete (table, condition) {
    return new promise((resolve, reject) => {
      let query = `DELETE FROM ${table} WHERE ${condition}`
      connection.query(query, (error, results) => {
        if (error) {
          console.log(error)
          reject('DB_ERROR')
        } else {
          resolve(results)
        }
      })
    })
  }

  // async filterPagination(table, selectParam, condition, body) {
  //   return new Promise((resolve, reject) => {
  //       let limit = (body.page - 1) * body.pagesize;
  //       var sql = `SELECT ${selectParam} FROM ${table} LIKE '${condition}%' LIMIT ${limit},${body.pagesize}`;
  //       console.log(sql);
  //       db.query(sql, (error, results) => {
  //           if (error) {
  //               console.log(error);
  //               reject("DB_ERROR")
  //           } else {
  //               db.query(`SELECT COUNT(id) as total FROM users WHERE first_name LIKE '${body.search}%'`, function (err, totalResult) {
  //                   if (err) {
  //                       console.log(error);
  //                       reject("DB_ERROR")
  //                   } else {
  //                       resolve({ data: results, total: totalResult.length > 0 ? totalResult[0].total : 0 })
  //                   }
  //               })
  //           }
  //       })
  //   })
  // }
}

module.exports = new DB()
