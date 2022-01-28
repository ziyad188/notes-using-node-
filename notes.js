const fs = require('fs');
const { updateLocale } = require('yargs');


const addNote = (title, body) =>{
    const notes = loadNotes();
    // this flter will traverse until the array end if result found
    // const duplicateNotes = notes.filter((note)=> note.title === title)
    // find method will stop once result found 
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("note added!");
    }else{
        console.log("note title taken!");
    }
    
}

   


const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }catch(e){
        return []

    }
    

}
const removeNote = (title) =>{
    const notes = loadNotes();
    const foundNote = notes.filter((note) => note.title != title)
    if(notes.length > foundNote.length){
        console.log("note  removed sucessfully");
        saveNotes(foundNote);
    }else{
        console.log("note doesn't exist");
    }
 
}
const listNotes = () =>{
    const notes = loadNotes();
    if(notes.length === 0){
       console.log("no notes");
    }else{
        console.log("Your Notes");
        notes.forEach( function(note){
            console.log("Title: "+ note.title);
        })
    }
    
}
const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find((note)=> note.title === title)
    if(!foundNote){
        console.log("No note found in this title!");
    }else{
        console.log("Title: " + foundNote.title + "\nBody: " + foundNote.body);
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

// arrow functions howw to use 
// convectional method
// const square = function(x){
//     return x*x
// }
// how to short the function syntax
// const square = (x) => {
//     return x*x
// }
//if only one statement is inside function we can use this syntax to..
// const square = (x) => x*x