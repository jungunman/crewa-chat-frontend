import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Socket } from "sockjs-client";
import { setMessage,setChatMessages } from "../store/messageSlice";
import { Stomp } from "@stomp/stompjs";
import { useLocation } from "react-router-dom";
import { setChattingRoomTitle } from "../store/headerSlice";
import Header from "./routes-components/Header";

function ChattingRooms(){

    const {message,chatMessages} = useSelector((state)=>state.messageStatus)
    const dispatch = useDispatch();
    const client = useRef({});
    const infomations = useLocation().state;
    
    useEffect(()=>{
        //푸터 헤더 바꾸기
        dispatch(setChattingRoomTitle(infomations.name));
        //입장
        return
        //퇴장
    },[])


    //커넥션 부분
    function connect (){
        client.current = new Stomp.client({
            brokerURL: "http://54.180.4.250:8779/api/socket/ws",
            connectHeaders: {
                //토큰 인증부분
                //Authorization: token
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
            onConnect: ()=>{
                //구독
                subscribe();
            },
            onStompError : (error)=>{
                console.log(error);
            }
        });

        client.current.activate();
    }

    function disconnect(){
        client.current.deactivate();
    }

    function subscribe(){
        client.current.subscribe(`http://54.180.4.250:8090/topic/roomId.messages`,({ body })=>{
            dispatch(setChatMessages(JSON.parse(body)));
        });
    }   

    function publish (message){
        if(!client.current.connected){
            return;
        }

        client.current.publish({
            destination : "app/chat",
            body:JSON.stringify({
                "message_id": "afeafo-ajfiojaioef-jfaoi",
              "room_id": 1,
              "sender": "0c629ce6-8114-427d-8050-bf81686ef137",
              "content": "반가워요",
              "read_user": [
                "0c629ce6-8114-427d-8050-bf81686ef137"
              ],
              "time": "2022-05-18T13:14:45.345",
              "update_time" : "2022-05-18T13:14:45.345"
            })
        })
    }



    return(
        <>
            <div className="ChattingRoom">
                <Header />
            </div>
        </>
    )
}

export default ChattingRooms;