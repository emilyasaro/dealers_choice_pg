const pg = require('pg');

const client = new pg.Client('postgres://localhost/kb_creamery_db');
// const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/kb_creamery_db');
const syncAndSeed = async () => {
  const SQL = `
  DROP TABLE IF EXISTS "Ice Cream";
  DROP TABLE IF EXISTS "Month";

  CREATE TABLE "Month"(
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL
  );
  CREATE TABLE "Ice Cream"(
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    recipe VARCHAR(700) NOT NULL,
    month_id INTEGER REFERENCES "Month"(id)
  );
  INSERT INTO "Month" (id, name) VALUES(1, 'January');
  INSERT INTO "Month" (id, name) VALUES(2, 'February');
  INSERT INTO "Month" (id, name) VALUES(3, 'March');
  INSERT INTO "Month" (id, name) VALUES(4, 'April');
  INSERT INTO "Month" (id, name) VALUES(5, 'May');
  INSERT INTO "Month" (id, name) VALUES(6, 'June');
  INSERT INTO "Month" (id, name) VALUES(7, 'July');
  INSERT INTO "Month" (id, name) VALUES(8, 'August');
  INSERT INTO "Month" (id, name) VALUES(9, 'September');
  INSERT INTO "Month" (id, name) VALUES(10, 'October');
  INSERT INTO "Month" (id, name) VALUES(11, 'November');
  INSERT INTO "Month" (id, name) VALUES(12, 'December');
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(1, 'Oh, Lemon', '', '', 1);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(2, 'Blueberry', '', '', 1);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(3, 'Health Bar Crunch', '', '', 2);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(4, 'Missing Chocolate', '', '', 2);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(5, 'Butter Brickle', '', '', 3);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(6, 'Blueberry-Lemon Cheesecake', '', '', 3);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(7, 'Cherry', '', '', 4);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(8, 'Vanilla', '', '', 4);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(9, 'Chocolate Brownie', '', '', 5);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(10, 'Pralines & Cream', '', '', 5);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(11, 'Strawberry', '', '', 6);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(12, 'Straciatella', '', '', 6);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(13, 'Mojito', '', '', 7);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(14, 'Tahitian Vanilla', '', '', 7);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(15, 'Cookies & Cream', '', '', 8);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(16, 'Salted Caramel', '', '', 8);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(17, 'Orange Sherbet', '', '', 9);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(18, 'Pear Caramel', '', '', 9);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(19, 'Apple Pie', '', '', 10);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(20, 'Mexican Vanilla', '', '', 10);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(21, 'Butterscotch Pecan', '', '', 11);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(22, 'Pumpkin Cheesecake', '', '', 11);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(23, 'Almond Roca', '', '', 12);
  INSERT INTO "Ice Cream" (id, name, description, recipe, month_id) VALUES(24, 'Peppermint Bark', '', '', 12);

  `
  await client.query(SQL)
}

module.exports = {
  client,
  syncAndSeed
}


// CREATE TABLE "Customer"(
//   id INTEGER PRIMARY KEY,
//   name VARCHAR(100) NOT NULL
// );
