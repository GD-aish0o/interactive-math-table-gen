#!/usr/bin/env node

// A typescript "foor loop" for a multiply table on any number provided by the user.

// Interactive multiply tables loop.

import inquirer from "inquirer"

const table = await inquirer.prompt([
    {
        name: "TableNumber",
        type : "number",
        message: "Enter the digit you want the table of."
    }
]);

// how many times a table should be printed:
// 12 ;)  c
const count = await inquirer.prompt([ 
{
    name: "TableCount",
    type : "number",
    message: "Enter a number of times you want the table to be printed. "
}

]) 

for (let i = 1; i <= count.TableCount; i++) {
    console.log(`${table.TableNumber} X ${i} = ${table.TableNumber * i}`);
}