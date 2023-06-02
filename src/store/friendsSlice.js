import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFriendsList = createAsyncThunk("GET/FriendList",
                                                async () =>{
                                                    return axios.get("http://localhost:8081/api/chat/friend/list").then(response =>response.data)});

const friendsList = createSlice({
    name : "friendsList",
    initialState : {
                    "data" : {
                        "favorite_friends" : [],
                         "friends": []
                    },
                    "loading" : false
                },
    reducers : {},
    extraReducers : builder =>{
        builder.addCase(fetchFriendsList.pending, (state) =>{
            state.loading = true;
        });
        builder.addCase(fetchFriendsList.fulfilled, (state,action) =>{
            state.favorite_friends = action.payload.favorite_friends;
            state.friends = action.payload.friends;
            state.loading = false;
        });
        builder.addCase(fetchFriendsList.rejected, (state,action)=>{
            state.loading = false;
        });
    }
});

// export let {} = friendsList.actions;
export default friendsList;
// export default friendsList.reducer;