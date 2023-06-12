import { createSlice } from "@reduxjs/toolkit";




const headerSelectionStatus = createSlice({
    name : "headerSelectionStatus",
    initialState : {headerTitle : "친구",
                    leftIconClassName : "",
                    rightIconClassName : "magnifier"},
    reducers:{
        setHomeHeaderTitle(status){
            status.headerTitle = "친구";
            status.leftIconClassName = "";
            status.rightIconClassName = "magnifier";
        },
        setChatHeaderTitle(status){
            status.headerTitle = "채팅";
            status.leftIconClassName = "";
            status.rightIconClassName = "";
        },
        setSettingHeaderTitle(status){
            status.headerTitle = "설정";
            status.leftIconClassName = "";
            status.rightIconClassName = "";
        },
        setChattingRoomTitle(status,action){
            status.headerTitle = action.payload;
            status.leftIconClassName = "arrow-left";
            status.rightIconClassName = "drawer";
        }
    }
});



export let {setChatHeaderTitle,setHomeHeaderTitle,setSettingHeaderTitle,setChattingRoomTitle} = headerSelectionStatus.actions;
export default headerSelectionStatus;