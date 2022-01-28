const { demandOption } = require("yargs");
const notes = require("./notes.js");
const yargs = require("yargs");
const { argv } = require("process");
// const chalks = require('chalks');
// create yargs version
yargs.version('1.1');
// create add command these are configration object 
yargs.command({
    command: 'add',
    describe:'ad a new node',
    builder:{
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    bulider:{
        describe: 'note title',
        demandOption: true,
        type: 'string'
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})
yargs.command({
    command: 'list',
    describe: 'list all note',
    handler(){
        notes.listNotes();
    }
})
yargs.command({
    command: 'read',
    describe:'read a note',
    builder: {
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
        
        
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})
yargs.parse()
// console.log(yargs.argv);

