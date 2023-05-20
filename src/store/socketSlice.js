import { createSlice } from "@reduxjs/toolkit";


const socketStatus = createSlice({
    name : "socketStatus",
    initialState : {socket : ""},
    reducers:{
        setSocket(status,action){
            status.socket = action.payload;
        }
    }
})


export let {setSocket} = socketStatus.actions;
export default socketStatus;