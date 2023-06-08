
import { open, get, run, close } from 'aa-sqlite';

async function CreateBaseIfNotExists() {
  await open("./.data/gym.db");

  let exists = null;
  let res = null;

  // USERS TABLE CREATE
  res = await get(
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name = 'users'",
    []
  );
  if (res.contar > 0) exists = true;
  if (!exists) {
    await run(
      `CREATE table users(
         IdUsuario INTEGER PRIMARY KEY AUTOINCREMENT, 
         User text NOT NULL UNIQUE, 
         Password text NOT NULL);`
    );
    console.log("users table created")

    await run(
      `insert into users values
      (1, 'FacundoReartes', '1234')`
    )
  };

  close();
}

CreateBaseIfNotExists();

export default CreateBaseIfNotExists;