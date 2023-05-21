import Footer from "./routes-components/Footer.js";
import Header from "./routes-components/Header.js";
import home from "./css/Home.css";
import profiles from "./css/components/profiles.css";
import rollUp from "./../images/arrows/roll-up.png";
import rollDown from "./../images/arrows/roll-down.png";
import profileImg from "./../images/basic_profile_imgs/basic-profile-1.png";
import { useDispatch, useSelector } from "react-redux";
import { onClickHome } from "../store/footerSlice.js";
import { setHomeHeaderTitle } from "../store/headerSlice.js"
import { useEffect, useState } from "react";
function Home(props){
    const dispatch = useDispatch();
    const [isOpenBookMark,setIsOpenBookMark] = useState(true);
    const [isThereFriendsInBookMark,setIsThereFriendsInBookMark] = useState(false);
    useEffect(()=>{
        dispatch(setHomeHeaderTitle());
        dispatch(onClickHome());
    },[]);

    return (
        <>
            <Header />
            <main className="main-screen pd-t-50 pd-bt-80">
                <MyProfile dispatch={dispatch}/>
                <h2 className="crewaAI__title">Crewa AI</h2>
                <CrewaAIProfile />

                <div className="subTitle">
                    <h2 className="subTitle__title">즐겨찾기</h2>
                    {isOpenBookMark && <img className="roll" src={rollDown} onClick={()=>{setIsOpenBookMark(!isOpenBookMark)}} alt="아래화살표"/>}
                    {!isOpenBookMark && <img className="roll" src={rollUp} onClick={()=>{setIsOpenBookMark(!isOpenBookMark)}} alt="오른쪽화살표"/>}
                </div>
                <div className="friends-bookmark__list">
                    {isOpenBookMark&&!isThereFriendsInBookMark && <p className="friends-bookmark__alert">즐겨찾기한 친구가 없습니다. <br/>소중한 친구를 즐겨찾기 해보세요!</p>}
                </div>

                <div className="subTitle">
                    <h2 className="subTitle__title">친구</h2>
                </div>
                <div className="friends__list">
                    <FriendProfile />
                </div>
            </main>
            <Footer/>

        </>
    )
}

function MyProfile(props){
    const {profileImgUrl,nickName,statusMsg} =useSelector((state)=>state.userInfo)
    return (
        <>
        <div className="profile__Mine">
            <img src={profileImg} alt="프로필 사진" />
            <div className="profile__info__Mine">
                <span className="profile__nickName__Mine">{nickName}</span>
                <p className="profile__statusMsg__Mine">상태메세지 길이를 조절하기 위해선 어떻게 하면 좋을지 생각해본적이 있나요?</p>
            </div>
        </div>
        </>
    )
}

function CrewaAIProfile(props){
    const {crewaAIName, crewaAIStatusMsg} = useSelector((state)=>state.crewaAI);
    return(<>
        <div className="profile__CrewaAI">
            <img src={profileImg} alt="CrewaAI Image" />
            <div className="profile__info__CrewaAI">
                <span className="profile__nickName__CrewaAI">{crewaAIName}</span>
                <p className="profile__statusMsg__CrewaAI">{crewaAIStatusMsg}</p>
            </div>
        </div>
    </>)
}

function FriendProfile(props){
    return(<>
        <div className="profile__friend">
            <img src={profileImg} alt="친구이미지"/>
            <div className="profile__info__friend">
                <span className="profile__nickName__friend">Friend Name</span>
                <p className="profile__statusMsg__friend">친구 상태메세지친구 상태메세지친구 상태메세지친구 상태메세지친구 상태메세지친구 상태메세지친구 상태메세지</p>
            </div>
        </div>
    </>)
}
export default Home;