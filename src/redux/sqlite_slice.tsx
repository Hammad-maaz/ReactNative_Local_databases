import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "../res/functions/sqlite";


export interface User{
    id: number,
    name: string,
    age: number
}

type UserState = {
    value: User[] | [],
    error: undefined | string,
}

const initialState: UserState ={
    value: [],
    error: undefined
}


const SQLiteSlice = createSlice({
    name: "sqlite",
    initialState,
    reducers:{
        updateUsers: (state, action:PayloadAction<User[]>)=>{
            state.value = action.payload
        }
    },
})

export const {updateUsers} = SQLiteSlice.actions
export const sqliteReducer = SQLiteSlice.reducer