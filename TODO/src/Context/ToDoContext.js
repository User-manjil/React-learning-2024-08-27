

import { createContext, useContext } from "react";

export const ToDoContext= createContext({
    todos:[
        {
            id:1,   todo:"To do Message",
            completed:false,

        },
       
    ],
    addTodo: (todo)=>{},
    updateTo:(id , todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

});
export const useTodo=()=>{
    return useContext(ToDoContext)

}

export const ToDOProvider = ToDoContext.Provider;