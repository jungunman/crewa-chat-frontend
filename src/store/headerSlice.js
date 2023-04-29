import { createSlice } from "@reduxjs/toolkit";




const headerSelectionStatus = createSlice({
    name : "headerSelectionStatus",
    initialState : {headerTitle : "Friends List",
                    leftIconClassName : "",
                    rightIconClassName : "magnifier"},
    reducers:{
        setHomeHeaderTitle(status){
            status.headerTitle = "Friends List";
            status.leftIconClassName = "";
            status.rightIconClassName = "magnifier";
        },
        setChatHeaderTitle(status){
            status.headerTitle = "Chats";
            status.leftIconClassName = "";
            status.rightIconClassName = "";
        },
        setSettingHeaderTitle(status){
            status.headerTitle = "Settings";
            status.leftIconClassName = "";
            status.rightIconClassName = "";
        }
    }
});



export let {setChatHeaderTitle,setHomeHeaderTitle,setSettingHeaderTitle} = headerSelectionStatus.actions;
export default headerSelectionStatus;