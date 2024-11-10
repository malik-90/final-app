import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter:0,
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        addCounter:(state,actions)=>{
state.counter = ++state.counter
        }
    ,

    delCounter:(state,actions)=>{
state.counter = --state.counter
            
    }
    
    }
})

export const  {actions,reducers } = counterSlice;

export const {addCounter,delCounter} = actions

export default reducers