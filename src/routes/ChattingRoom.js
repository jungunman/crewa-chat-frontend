import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import SockJS, { Socket } from "sockjs-client";
import { setMessage,setChatMessages } from "../store/messageSlice";
import { Stomp } from "@stomp/stompjs";
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
    const client = useRef({});
    const infomations = useLocation().state;
    
    const connect = () => { // 연결할 때
        console.log("Connection 안!!")
        client.current = new Stomp({
          brokerURL: 'http://54.180.4.250:8779/api/socket/ws',
          onConnect: () => {
            console.log("연결 직전!")
            // subscribe(`/topic/${1}.messages`); // 연결 성공 시 구독하는 로직 실행
            console.log("연결 성공!")
          },
    });
        client.current.activate(); // 클라이언트 활성화
      };
      
      const disconnect = () => { // 연결이 끊겼을 때 
        client.current.deactivate();
      };

    function sendHandler(){
        client.current.send()
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