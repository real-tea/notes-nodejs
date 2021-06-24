const chalk = require('chalk'); //npm module
const yargs = require('yargs');

const notes = require('./notes.js'); // local module

yargs.version('1.1.0');



//add,remove notes using yargs

//adding a note
yargs.command({
    command : 'add', //command with which this function will run
    describe : 'Add a new note', // you can choose to ignore
    builder:{
        title:{ /* title of the note*/
            describe: 'note title',
            demandOption :true, //demand option is by default false i.e. when set to true it will always ask for a title
            type: 'string'
        },
        body:{ /*body of the note*/
            describe: 'note body',
            demandOption :true, //demand option is by default false i.e. when set to true it will always ask for a body
            type: 'string'
        }
    },
    handler: function(argv){ //function that will run once command is given
        console.log(chalk.yellow("adding notes")); 
        notes.addnotes(argv.title,argv.body);
    },
});

yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder:{
        title:{
        describe:'note title remove',
        demandOption:true,
        type: 'string'
        }
    },
    handler: function(argv){ //function that will run once command is given
        console.log(chalk.green("removing notes"));
        notes.removeNotes(argv.title);   
    }

});
yargs.command({
    command:'list',
    describe: 'listing notes',
    
    handler:function(argv){ //function that will run once command is given
    notes.listNotes();}
});
yargs.command({
    command:'read',
    describe: 'reading notes',
    builder:{
        title:{
             describe:'reading notes',
             demandOption:true, //demand option is by default false i.e. when set to true it will always ask for a
             type: 'string'
        }
    },
    handler: function(argv){ //function that will run once command is given
    console.log('reading notes')
    notes.readNote(argv.title);
}

});
yargs.parse();
