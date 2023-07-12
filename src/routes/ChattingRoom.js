import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import SockJS, { Socket } from "sockjs-client";
import { setMessage,setChatMessages } from "../store/messageSlice";
import { Stomp, Client, Message } from "@stomp/stompjs";
import { useLocation } from "react-router-dom";
import { setChattingRoomTitle } from "../store/headerSlice";
import Header from "./routes-components/Header";
// 아이콘들
import voice from "./../images/icons/mike.png";
import plus from "./../images/icons/plus.png";
import emoticon from "./../images/icons/emoticon.png";
import profileImg from "./../images/basic_profile_imgs/basic-profile-1.png";
//css
import "./css/ChattingRoom.css";

function ChattingRooms(){

    const {message,chatMessages} = useSelector((state)=>state.messageStatus)
    const dispatch = useDispatch();
    const infomations = useLocation().state;
    const client = useRef({});

    function connect(){
        client.current = new Stomp.Client({
            brokerURL: 'ws://54.180.4.250:8090/api/socket/ws',
            connectHeaders: {
                //헤더 값
            },
            debug: function (str) {
              console.log(str);
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
            onConnect : function (){
                //연결되면 구독합니다.
                //구독 함수 여기다가 넣으세요.
            },
            onStompError : function(){
                console.log('Broker reported error: ' + frame.headers['message']);
                console.log('Additional details: ' + frame.body);
            }
        })
        client.current.activate();
    }

    function disconnect(){
        client.current.deactivate();
    }

    useEffect(()=>{
        //푸터 헤더 바꾸기
        // dispatch(setChattingRoomTitle(infomations.name));
        dispatch(setChattingRoomTitle("크루와"));
        //입장
        // const socket = new StompJS("http://54.180.4.250:8090/api/socket/ws");
        connect()

        return ()=>{disconnect()}
        //퇴장

    },[])



    return(
        <>
            <div className="chattingRoom">
                <Header />

                <main className="main-chattingRoom pd-rg-20 pd-lf-20 pd-t-60 pd-bt-50"> 
                    <Bubble />
                    <MyBubble />

                </main>
                   


                <ChattingRoomFooter/>
            </div>
        </>
    )
}

function ChattingRoomFooter(){
    return(<>
        <footer className="chattingRoom__footer">
                    <div className="chattingRoom__column">
                        <img className="chattingRoom__moreBtn" src={plus} />
                    </div>
                    <div className="chattingRoom__column">
                        <input className="chattingRoom__input" placeholder="메세지를 입력하세요"/>
                        <img className="chattingRoom__emoticon" src={emoticon}/>
                    </div>
                    <div className="chattingRoom__column">
                        <img className="chattingRoom__voice" src={voice}/>
                        {/* 이곳에 보내기 버튼도 넣으세요. */}
                    </div>
                </footer>
    </>)
}


function Bubble() {
    return(<>
            <div className="bubble">
                <img src={profileImg} className="bubble__profile-img" />
                <div className="speech-box">
                    <p className="speech-bubble">안녕하세요</p>
                    <p className="speech-time">15:33</p>
                </div>
            </div>
    
    </>)
}


function MyBubble() {
    return(<>
            <div className="bubble__mine">
                <div className="speech-box__mine">
                    <p className="speech-bubble__mine">안녕하세요</p>
                    <p className="speech-time__mine">15:33</p>
                </div>
                <img src={profileImg} className="bubble__profile-img__mine" />
            </div>
    
    </>)
}
export default ChattingRooms;