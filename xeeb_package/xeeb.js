#! /usr/bin/env node
import inquirer from "inquirer";

let answer = await inquirer.prompt([{
name: "Username",
type: "string",
message: "What is your name? "
}]);

console.log("Welcome! " + answer.Username);