import { createSlice } from "@reduxjs/toolkit";



const crewaAI = createSlice({
    name : "crewaAI",
    initialState : {crewaAIName : "크루와 AI이름을 정해주세요",
                    crewaAIStatusMsg : "만나서 반가워요 :)"},
    reducers :{
        setCrewaAIName(status,action){
            status.crewaAIName = action.payload;
        }
    }
})

export let {setCrewaAIName} = crewaAI.actions;
export default crewaAI;