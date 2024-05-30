#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [];
let conditions = true;

console.log(chalk.green.bold("\n \t Wellcome to SyedaSobia - Todo-List-Application\n"));


let main = async () => {
    while (conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if(option.choice === "Delete Task"){
            await deleteTask()
        }
        else if(option.choice === "Update Task"){
            await updateTask()
        }
        else if(option.choice === "View Todo-List"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false;
        }
    }
}

    let addTask = async () => {
        let newTask = await inquirer.prompt([
            {
                name: "task",
                type: "input",
                message: "Enter Your New Task:"
            }
        ]);
        todoList.push(newTask.task);
        console.log(`\n ${newTask.task} task added successfully in Todo-List`);
    }

    // Function to View all Todo-List Tasks
    let viewTask = () => {
        console.log("\n Your Todo-List: \n");
        todoList.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`)
        })
    }
    
    // Function to delete a task from the list
    let deleteTask = async () => {
        await viewTask()
        let taskIndex = await inquirer.prompt([
            {
                name: "index",
                type: "number",
                message: "Enter the 'index no.' of the task you want to delete:",
            }
        ]);
        let deleteTask = todoList.splice(taskIndex.index - 1, 1);
        console.log(`\n ${deleteTask} this task has been deleted successfully from Todo-List`);
    }

    // Function to Update a task
    let updateTask = async () => {
        await viewTask()
        let updateTaskIndex = await inquirer.prompt([
            {
                name: "index",
                type: "number",
                message: "Enter the 'index no.' of the task you want to update:"
            },
            {
                name: "newTask",
                type: "input",
                message: "Now Enter new task name:",
            }
        ]);
        todoList[updateTaskIndex.index - 1] = updateTaskIndex.newTask
        console.log(`\n Task at index no. ${updateTaskIndex.index - 1} updated successfully [for updated list check option: "view Todo-List"]`);
    }
    
    main();


