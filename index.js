require('dotenv').config();
const chalk = require('chalk')

const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
})
app.get('/new', (req, res) => {
  res.render('comingsoon');
})
app.get('/boba', (req, res) => {
  res.render('boba');
})

app.use((req, res) => {
  res.status(404).render("404");
});















app.listen(process.env.PORT, () => {
  console.log(chalk.green(`[+] PORT: ${process.env.PORT}`));
});