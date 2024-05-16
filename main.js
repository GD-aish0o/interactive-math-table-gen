#!/usr/bin/env node
// A typescript "foor loop" for a multiply table on any number provided by the user.
// Interactive multiply tables loop.
import inquirer from "inquirer";
const table = await inquirer.prompt([
    {
        name: "TableNumber",
        type: "number",
        message: "Enter the digit you want the table of."
    }
]);
const count = 12;
for (let i = 1; i <= count; i++) {
    console.log(`${table.TableNumber} X ${i} = ${table.TableNumber * i}`);
}
