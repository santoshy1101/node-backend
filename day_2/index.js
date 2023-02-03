const chalk = require("chalk");

const validator= require("validator")

// console.log(chalk.blue("false"))

const valid = validator.isEmail("ant@gmail.com");

console.log( valid ? chalk.green.underline.inverse(valid) : chalk.red.underline.inverse(valid))