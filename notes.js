const fs = require('fs');
const chalk = require('chalk');


const getnotes=()=>
{
    return "this notes";
}

const addnotes = function(title,body){
    const note = loadNotes();
    const duplicate = note.find(function(n){
        return n.title === title;
    });     // duplicate will be an array of title that are repeated
    if(!duplicate)   //i.e. no duplicate note is found
    {
        note.push({
            title:title,
            body: body
        })
        saveNotes(note);
    }
    else{
        console.log("note title already taken !!");  
    }
    
}
const listNotes = function(){
    const note = loadNotes()
    console.log(chalk.inverse.red("Your notes: "));
    note.forEach((n)=>{
        console.log(n.title);
    })

}


const removeNotes = function(title){
    const note = loadNotes();
    const notestokeep = note.filter(function(n){
        return n.title !== title;
    })
    if(notestokeep.length<note.length){
        console.log(chalk.red("removing note"))
        saveNotes(notestokeep);   
    }
     else{
         console.log(chalk.red("note note found"));
     }
    
}

const readNote = function(title){
    const note = loadNotes();
    const read = note.find(function(read){
        return read.title === title;
    })
    if(read){
        console.log(chalk.inverse.green(read.title));
        console.log(chalk.inverse.yellow(read.body));
        
    }
    else{
        console.log(chalk.inverse.red("no note found"));
    }
}


const saveNotes = function(note){
    const dataJSON = JSON.stringify(note);
    fs.writeFileSync('json-notes.json', dataJSON)
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('json-notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return []; 
    }
}


module.exports ={
    readNote: readNote,
    listNotes:listNotes,
    removeNotes: removeNotes,
    getnotes: getnotes,
    addnotes: addnotes 
}