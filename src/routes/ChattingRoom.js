import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { setSocket } from "../store/socketSlice";

function ChattingRooms(){

    const socketStatus = useSelector((state)=>state.socketStatus)
    const dispatch = useDispatch();

    useEffect(()=>{

        const socketIo = io("http://localhost:8090/api/socket/ws",{
            cors : {
                origin: "*"
            },
            transports : ["websocket"]
        })

        socketIo.on("responseRoom", (data) => {
            console.log(`data : ${data}`);
        })

        console.log(`socketIo : ${JSON.stringify(socketIo.nsps)}`);
    } ,[])

    useEffect(()=>{
        return (()=>{
            if(socketStatus.socket){
                socketStatus.socket.disconnect();
            }
        })
    }, [socketStatus.socket])

    return(
        <>
            <div>
                <h1>Chatting Room</h1>
                
            </div>
        </>
    )
}

export default ChattingRooms;