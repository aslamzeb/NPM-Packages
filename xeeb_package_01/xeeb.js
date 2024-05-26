#! /usr/bin/env node
import inquirer from "inquirer";

let name1 = await inquirer.prompt([{
name: "Username",
type: "string",
message: "What is you name? "
}]);

let birth = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "What is you age? "
}]);

let id = await inquirer.prompt([{
    name: "email",
    type: "string",
    message: "What is you Email? "
}]);

console.log("Welcome! " + name1.Username +", your are " + birth.age + " years old and your email ID is " + id.email);