import Footer from "./routes-components/Footer.js";
import Header from "./routes-components/Header.js";
import home from "./css/Home.css";
import profiles from "./css/components/profiles.css";
import profileImg from "./../images/basic_profile_imgs/basic-profile-1.png";
import { useDispatch, useSelector } from "react-redux";
import { onClickHome } from "../store/footerSlice.js";
import { setHomeHeaderTitle } from "../store/headerSlice.js"
import { useEffect } from "react";
function Home(props){
    const {profileImgUrl,nickName,statusMsg} =useSelector((state)=>state.userInfo)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setHomeHeaderTitle());
        dispatch(onClickHome());
    },[]);

    return (
        <>
            <Header />
            <main className="main-screen pd-t-50 pd-bt-80">
                <MyProfile profileImgUrl={profileImgUrl} nickName={nickName} statusMsg={statusMsg}/>
            </main>
            <Footer/>

        </>
    )
}

function MyProfile(props){
    return (
        <>
        <div className="profile__Mine">
            <img src={profileImg} alt="프로필 사진" />
            <div className="profile__info__Mine">
                <span className="profile__nickName__Mine">{props.nickName}</span>
                <p className="profile__statusMsg__Mine">상태zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz21312312312zzzz</p>
            </div>
        </div>
        </>
    )
}

export default Home;