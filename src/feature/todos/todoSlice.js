import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice(
    {
        name:"todos",
        initialState:{
            allTodos:[
                {id:1,title:"some title",description:"some description"}
            ],
            edit:{
                todo:{},
                isEdit:false
            }
        },
        reducers:{
            // add todo
            addTodo:(state,action)=>{
                return{
                    ...state,
                    allTodos:[action.payload,...state.allTodos]
                }
            },
            removeTodo:(state,action)=>{
                return{
                    ...state,
                    allTodos:state.allTodos.filter((todo)=>todo.id!==action.payload)
                }
            },
            editTodo:(state,action)=>{
                return{
                    ...state,
                    edit:{todo:action.payload,isEdit:true}
                }
            },
            updateTodo:(state,action)=>{
                return{
                    ...state,
                    allTodos:state.allTodos.map((todo)=>todo.id===action.payload.id?action.payload:todo),
                    edit:{todo:{},isEdit:false}
                }
            }
        }
    }
)
export const{addTodo,removeTodo,editTodo,updateTodo} =todoSlice.actions

export default todoSlice.reducer;