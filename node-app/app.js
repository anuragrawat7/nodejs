//console.log('Hello World')

//Write in file
// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'Welcome to Node JS.')
// fs.appendFileSync('notes.txt', ' Data is added')

//Validation check
// import validator from 'validator'
//console.log(validator.isEmail('anurag@gmail.com'))
//console.log(validator.isURL('www.google.com))

//Styling of font using chalk
//import chalk from 'chalk'
//console.log(chalk.green('Success'))

//Input fron the argument
//console.log(process.argv[2])

// ------------------------------------------------------------------
//YARGS - Yargs helps you build interactive command line tools, 
//by parsing arguments and generating an elegant user interface.
//import yargs from "yargs";
//node app.js --help & node app.js --version
//console.log(yargs.argv)

// yargs.command({
//     command: 'add',
//     description: 'Add a new note',
//     handler: function(){
//         console.log('Added a new note')
//     }
// })

// yargs.command({
//     command: 'add',
//     description: 'Add a new note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body:{
//             describe: 'Note body',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv){
//         console.log('Title : ' + argv.title)
//         console.log('Body : ' + argv.body)
//     }
// })

// //console.log(yargs.argv)
// //or
// yargs.parse()

// ----------------------------------------------------
//Arrow functions - Arrow functions allow us to write shorter function syntax:

//without arrow functions
// const val = function(x) {
//     return x * x
// }
// console.log(val(2))

//With Arrow
//const val = (x) => x * x
//console.log(val(2))

// const event = {
//     name: 'Birthday party',
//     guestList: ['Anurag', 'Rawat', 'Code']  ,
//     printGuestList() { 
//         console.log('Guest list for ' + this.name)
//         this.guestList.forEach((guest) => {
//             console.log(guest)
//         })
//     }
// }

// event.printGuestList()

//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],

    getTasksToDo() {
        //const taskToDo = this.tasks.filclearter((task) => {
        //  return task.completed === false
        //})
        //return taskToDo

        return this.tasks.filter((task) => task.completed === false)

    }
}

console.log(tasks.getTasksToDo())

//-------------------------------------
//Debug a code
//1. Use debugger keyword at the place to break
//2. Command to change - node inspect app.js

//-----------------------------------------------
