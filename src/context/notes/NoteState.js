import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "641b35790ae29ba0c5c6c534",
            "user": "641b35380ae29ba0c5c6c530",
            "title": "mytitle",
            "description": "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio, sit minima delectus odit ea expedita quo, conse",
            "tag": "personal",
            "date": "2023-03-22T17:06:01.632Z",
            "__v": 0
        },
        {
            "_id": "641b35790ae29ba0yc5c6c534",
            "user": "641b35380ae29ba0c5c6c530",
            "title": "mytitle",
            "description": "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio, sit minima delectus odit ea expedita quo, conse...",
            "tag": "personal",
            "date": "2023-03-22T17:06:01.632Z",
            "__v": 0
        },
        {
            "_id": "641b35790ae29bsa0c5c6c534",
            "user": "641b35380ae29ba0c5c6c530",
            "title": "mytitle",
            "description": "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio, sit minima delectus odit ea expedita quo, conse...",
            "tag": "personal",
            "date": "2023-03-22T17:06:01.632Z",
            "__v": 0
        },
        {
            "_id": "641b35790ae29bsa0c5c6c534",
            "user": "641b35380ae29ba0c5c6c530",
            "title": "mytitle",
            "description": "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio, sit minima delectus odit ea expedita quo, conse...",
            "tag": "personal",
            "date": "2023-03-22T17:06:01.632Z",
            "__v": 0
        },
        {
            "_id": "641b35790aae29ba0c5c6c534",
            "user": "641b35380ae29ba0c5c6c530",
            "title": "mytitle",
            "description": "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio, sit minima delectus odit ea expedita quo, conse...",
            "tag": "personal",
            "date": "2023-03-22T17:06:01.632Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;