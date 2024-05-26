#! /usr/bin/env node
import inquirer from "inquirer";
import chalk, { Chalk } from 'chalk';
let t_pizza = await inquirer.prompt([{
name: "Username",
type: "list",
choices: ["Cheddar Cheese","Mozellera Cheese","Parmesan Cheese"],
message: chalk.green("Select Your Cheese Flavour? ")
}]);

let sizeOfPizza = await inquirer.prompt([{
    name: "size",
    type: "list",
    choices: ["Small", "Medium", "Large", "Extra Large"],
    message: chalk.yellow("Which Size Of Pizza Do You Want To Order? ")
}]);

let n_pizza = await inquirer.prompt([{
    name: "quantity",
    type: "list",
    choices: ["One", "Two", "Three", "More Than Three"],
    message: chalk.blue("How Many Pizzas Do You Want To Order? ")
}]);

console.log("Congratulation Sir! Your Order Of " + chalk.blue(n_pizza.quantity)+ " " + chalk.yellow(sizeOfPizza.size) + " Sized Pizza Of " + chalk.green(t_pizza.Username) + " Flavour Has Been Placed. Thanks");