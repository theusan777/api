export class Database {
   database = {}

    insert(table, data) {
        if (Array.isArray(this.database[table])) {
            this.database[table].push(data)
        } else {
            this.database[table] = [data]
        } 
    }

    select(table, search) {
      return this.database[table]
    } 
}