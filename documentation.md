# HOW-TO-USE

NOTE:

I'm assuming that you already have PostgreSQL in your computer system. If not, you can visit:

`https://www.postgresqltutorial.com/postgresql-getting-started/`

to know step-by-step how to install PostgreSQL based on your computer operating system.

OK, lets get started:

1. clone this repository to your local system

2. move to cloned repo directory, and then open terminal

3. in terminal, run `npm install`

4. install `sequelize-cli` globally by running `npm install --global sequelize-cli` in terminal

5. in `config/config.json`, change username and password based on your own postgres username and password

6. in terminal, run `npx sequelize db:create` or `sequelize db:create`

7. in terminal, run `npx sequelize db:migrate` or `sequelize db:migrate`

8. in terminal, run `npx sequelize db:seed:all` or `sequelize db:seed:all`

9. in terminal, run `node app.js`

Now your app.js will listen on `http://localhost:3000`
