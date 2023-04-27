import { createSlice } from "@reduxjs/toolkit";


 const footerSelectionStatus = createSlice({
    name : "footerSelectionStatus",
    initialState : {home : "footer__icon-home",
                    chat : "footer__icon-chat",
                    setting : "footer__icon-setting"},
    reducers : {
        onClickHome (status){
            status.home = "footer__icon-home__selected";
            status.chat = "footer__icon-chat";
            status.setting = "footer__icon-setting";
        },
        onClickChat (status){
            status.home = "footer__icon-home";
            status.chat = "footer__icon-chat__selected";
            status.setting = "footer__icon-setting";
        },
        onClickSetting (status){
            status.home = "footer__icon-home";
            status.chat = "footer__icon-chat";
            status.setting = "footer__icon-setting__selected";
        }
    }
 })


 export let {onClickChat,onClickHome,onClickSetting} = footerSelectionStatus.actions;

 export default footerSelectionStatus;