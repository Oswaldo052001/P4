import mysql from "mysql2/promise";
import db from "./keys";

const connect = () => {
  const pool = mysql.createPool(db.database);
  pool.getConnection();
  console.log('DB is conected')
  return pool; 
}

export const Mysql = connect();