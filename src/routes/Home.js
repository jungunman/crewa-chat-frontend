import Footer from "./Footer.js";
import home from "./css/Home.css";
import profiles from "./css/components/profiles.css";
import profileImg from "./../images/basic_profile_imgs/basic-profile-1.png";
import { useDispatch, useSelector } from "react-redux";
import { onClickHome } from "../store/footerSlice.js";
import { useEffect } from "react";
function Home(props){
    const {profileImgUrl,nickName,statusMsg} =useSelector((state)=>state.userInfo)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(onClickHome());
    },[]);

    return (
        <>
            <header className="header__home">
                <div className="header__column">
                    <img  className="header__icon"/>
                </div>
                <div className="header__column">
                    <h3 className="header__title">Friend List</h3>
                </div>
                <div className="header__column">
                    <img className="header__icon" src={require("./../images/icons/magnifier.png")} alt="검색하기"/>
                </div>
            </header>

            <div className="main-screen pd-t-70 pd-bt-80">
                <main className="main__home">
                    <Profile profileImgUrl={profileImgUrl} nickName={nickName} statusMsg={statusMsg}/>
                </main>
            </div>
            <Footer/>

        </>
    )
}

function Profile(props){
    return (
        <>
        <div className="profile">
            <img src={profileImg} alt="프로필 사진" />
            <div className="profile__info">
                <span className="profile__nickName">{props.nickName}</span>
                <p className="profile__statusMsg">상태 메세지</p>
            </div>
        </div>
        </>
    )
}

export default Home;