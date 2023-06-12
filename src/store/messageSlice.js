import { createSlice } from "@reduxjs/toolkit";


const messageStatus = createSlice({
    name : "messageStatus",
    initialState : {chatMessages : [],
                    message: ""},
    reducers:{
        setChatMessages(status,action){
            status.chatMessages.push(action.payload);
        },
        setMessage(status,action){
            status.message = action.payload;
        }
    }
})


export let {setChatMessages, setMessage} = messageStatus.actions;
export default messageStatus;