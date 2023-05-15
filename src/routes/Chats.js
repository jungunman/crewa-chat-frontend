import Footer from "./routes-components/Footer.js";
import { onClickChat } from "../store/footerSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setChatHeaderTitle } from "../store/headerSlice.js";
import Header from "./routes-components/Header.js";

function Chats(props){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setChatHeaderTitle());
        dispatch(onClickChat());
    },[]);

    return (
        <>
            <Header />
            <div className="main-screen">

            </div>
            <Footer/>
        </>
    )
}

export default Chats;