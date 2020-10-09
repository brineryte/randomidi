//This was all wroking before using quokka, but not liking to run in the browser...
var mw = require('midi-writer-js')

// Globals
var input = "01001101 01110101 01100011 01101000 00100000 01110100 01101000 01100001 01110100 00100000 01101111 01101110 01100011 01100101 00100000 01110111 01100001 01110011 00100000 01101001 01110011 00100000 01101100 01101111 01110011 01110100 00111011 00100000 01100110 01101111 01110010 00100000 01101110 01101111 01101110 01100101 00100000 01101110 01101111 01110111 00100000 01101100 01101001 01110110 01100101 00100000 01110111 01101000 01101111 00100000 01110010 01100101 01101101 01100101 01101101 01100010 01100101 01110010 00100000 01101001 01110100 00101110 ";
var notes1 = ['A1', 'B2', 'C3']; //the 1's music notes
var notes0 = ['D4', 'E5', 'F6']; //the 0's music notes


    var track = new mw.Track();
    track.setTempo(180);
    track.addEvent(new mw.ProgramChangeEvent({instrument:3}));

    var note = 
        new mw.NoteEvent({
                pitch: buildNoteArray(input.split('')), 
                duration: '16'});

    track.addEvent(note, function(event, index) {
        return {sequential:true};
    });

    var write = new mw.Writer(track);
    write.saveMIDI("midi/newfile");


function buildNoteArray(inputArr){
    let noteArr = [];
    for(i = 0; i < inputArr.length; i++){
        let note = inputArr[i] == '0' ? 
            notes0[Math.floor(Math.random() * notes0.length)] :
            notes1[Math.floor(Math.random() * notes1.length)];
        noteArr.push(note);
    }
    return noteArr;
}      