import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=> {
    const s1 = {
        "name" : "Argha",
        "class" : "12a"
    }
    const [state, setState] = useState(s1);
    let update = ()=> {
        setTimeout(() => {
            setState({
                "name" : "Avirup",
                "class" : "12b"
            })
        }, 2000);
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;