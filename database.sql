CREATE TABLE "toDoList"(
"id" SERIAL PRIMARY KEY,
"task" VARCHAR(100) NOT NULL
"complete" BOOLEAN 
);
`INSERT INTO "toDoList" ("task", "complete") VALUES ($1, $2);`
SELECT * FROM "toDoList" ORDER BY "id";
UPDATE "toDoList" SET "task" = $1 WHERE "complete" = $2;
DELETE FROM "toDoList" WHERE "id" = $1;
UPDATE "toDoList" SET "complete" = $1 WHERE "id" = $2;