require('dotenv').config();
const chalk = require('chalk')

const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));



app.get('/', (req, res) => {
  res.render('index');
})














app.listen(process.env.PORT, () => {
  console.log(chalk.green(`[+] PORT: ${process.env.PORT}`));
});