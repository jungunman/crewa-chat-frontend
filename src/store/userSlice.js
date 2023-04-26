import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name : "userInfo",
    initialState : {nickName : "",
                    phoneNumber : "",
                    statusMsg : "",
                    profileImgUrl:"./../images/basic_profile_imgs/basic-profile-1.png",
                    backgroundImgUrl :""},
    reducers : {
        setUserNickName(status,action){
            status.nickName = action.payload;
        },
        setPhoneNumber(status,action){
            status.phoneNumber = action.payload;
        }
    }
})

export let {setUserNickName, setPhoneNumber} = userInfo.actions;

export default userInfo;