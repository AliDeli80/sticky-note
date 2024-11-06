import React from "react";
import Note from './Note';

function StickyNote() {

    const notesData = [
        { title: 'Title #1', content: 'Text content #1'},
        { title: 'Title #2', content: 'Text content #2'},
        { title: 'Title #3', content: 'Text content #3'},
        { title: 'Title #4', content: 'Text content #4'},
        { title: 'Title #5', content: 'Text content #5'},
        { title: 'Title #6', content: 'Text content #6'},
        { title: 'Title #7', content: 'Text content #7'},
        { title: 'Title #8', content: 'Text content #8'},
    ]

    const notes = notesData.map((note, index) => <Note key={index} title={note.title} content={note.content} />);
    

    return (
        <ul>
            {notes}
        </ul>
    )
}

export default StickyNote;