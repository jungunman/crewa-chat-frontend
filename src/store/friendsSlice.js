import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// axios.get("http://localhost:8081/api/chat/friend/list",{params : {userId:"dd8cdbf1-c77d-49d0-b8c6-f0a04fe12c90"}})
export const fetchFriendsList = createAsyncThunk("GET/FriendList",
                                                async () =>{
                                                    return axios.get("http://54.180.4.250:8090/api/chat/friend/list",{headers:{Authorization :"dd8cdbf1-c77d-49d0-b8c6-f0a04fe12c90" }})
                                                    .then(response =>response.data.data)
                                                    .catch(function (error) {
                                                        if (error.response) {
                                                          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                                                          console.log(error.response.data);
                                                          console.log(error.response.status);
                                                          console.log(error.response.headers);
                                                        }
                                                        else if (error.request) {
                                                          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                                                          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                                                          // Node.js의 http.ClientRequest 인스턴스입니다.
                                                          console.log(error.request);
                                                        }
                                                        else {
                                                          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                                                          console.log('Error', error.message);
                                                        }
                                                        console.log(error.config);
                                                      });});

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