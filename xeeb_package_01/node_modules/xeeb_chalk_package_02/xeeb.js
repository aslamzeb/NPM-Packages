#! /usr/bin/env node
import inquirer from "inquirer";
import chalk, { Chalk } from 'chalk';
let name1 = await inquirer.prompt([{
name: "Username",
type: "string",
message: chalk.green("What is your name? ")
}]);

let birth = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: chalk.yellow("What is your age? ")
}]);

let id = await inquirer.prompt([{
    name: "email",
    type: "string",
    message: chalk.blue("What is your Email? ")
}]);

console.log(chalk.green("Welcome! " + name1.Username) + ", you are " + chalk.yellow(birth.age) + " years old and your email ID is " + chalk.blue(id.email));