import SQLite from "react-native-sqlite-storage"
import { AppDispatch } from "../../redux/store"
import { updateUsers, User } from "../../redux/sqlite_slice"
import { useDispatch } from "react-redux"
import { Alert } from "react-native"


const db = SQLite.openDatabase(
    {name: "mydb.db", location: "default"},
    () => {console.log("Database opened")},
    (error) => {console.log(`Databae Connection Error:${error}`)}
)


export const createTable = async() => {
    await db.executeSql(`CREATE TABLE IF NOT EXISTS Users(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, age INTEGER NOT NULL)`)
}

export const insertUser = (name: string, age:number) => {
    db.transaction(tx => {
        tx.executeSql(
            `INSERT INTO Users(name, age) VALUES (?, ?)`, [name, age],
            (_, result)=> {console.log("User Inserter")},
            (_, error) => {console.log(`HERE IS ERROR IN INSERTING: ${error}`)}
        )
    })
}

export const getUsers = ():Promise<User[]> => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
        tx.executeSql(
            `SELECT * FROM Users`,
             [],
             (_, result) => {
                const users: User[] = [];
                const allRows = result.rows;
                for(var i =0; i < allRows.length; i++){
                    users.push(allRows.item(i))
                }
                resolve(users)
             },
             (_, error)=> {
                reject(error)
                return false
             }
        )
    })
    })
}

export const deleteUser = (id: number) => {
    db.transaction(tx => {
        tx.executeSql(
            `DELETE FROM Users WHERE id = ?`, 
            [id],
            (_, result) => {Alert.alert("User Deleted")},
            (_, error) => {console.log(`HERE IS ERROR IN DELETING: ${error}`)}
        )
    })
}