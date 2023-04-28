import Footer from "./routes-components/Footer.js";
import { onClickChat } from "../store/footerSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Chats(props){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(onClickChat());
    },[]);

    return (
        <>
            <div className="main-screen">

            </div>
            <Footer/>
        </>
    )
}

export default Chats;