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
import yargs from "yargs";
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

