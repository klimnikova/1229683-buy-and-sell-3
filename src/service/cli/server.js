"use strict";

const chalk = require(`chalk`);
const express = require(`express`);
const {HttpCode, API_PREFIX} = require(`../../constants`);
const routes = require(`../api`);

const DEFAULT_PORT = 3000;

const app = express();

app.use(express.json());
app.use(API_PREFIX, routes);

app.use((req, res) => res.status(HttpCode.NOT_FOUND).send(`Not found`));

const server = app.listen(DEFAULT_PORT, (err) => {
  if (err) {
    return console.error(`Ошибка при создании сервера`, err);
  }

  return console.info(chalk.green(`Ожидаю соединений на ${DEFAULT_PORT}`));
});

module.exports = {app, server};
