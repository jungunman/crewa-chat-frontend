import Footer from "./routes-components/Footer.js";
import Header from "./routes-components/Header.js";
import home from "./css/Home.css";
import profiles from "./css/components/profiles.css";
import crewaAI from "./../images/logo/CrewaAI.png";
import rollUp from "./../images/arrows/roll-up.png";
import rollDown from "./../images/arrows/roll-down.png";
import profileImg from "./../images/basic_profile_imgs/basic-profile-1.png";
import { useDispatch, useSelector } from "react-redux";
import { onClickHome } from "../store/footerSlice.js";
import { setHomeHeaderTitle } from "../store/headerSlice.js"
import { useEffect, useState } from "react";
import { fetchFriendsList } from "../store/friendsSlice.js";
import { Link } from "react-router-dom";
function Home(props){
    const dispatch = useDispatch();
    const [isOpenBookMark,setIsOpenBookMark] = useState(true);
    const {favorite_friends,friends,loading} = useSelector((status)=>status.friendsList);
    useEffect(()=>{
        // 헤더와 푸터 바꾸기
        dispatch(setHomeHeaderTitle());
        dispatch(onClickHome());
        dispatch(fetchFriendsList());
    },[]);

    return (
        <>
            <Header />
            <main className="main-screen pd-rg-20 pd-lf-20 pd-t-50 pd-bt-50">
                <MyProfile dispatch={dispatch}/>
                <h2 className="crewaAI__title">Crewa AI</h2>
                <CrewaAIProfile />

                <div className="subTitle">
                    <h2 className="subTitle__title">즐겨찾기</h2>
                    {isOpenBookMark && <img className="roll" src={rollDown} onClick={()=>{setIsOpenBookMark(!isOpenBookMark)}} alt="아래화살표"/>}
                    {!isOpenBookMark && <img className="roll" src={rollUp} onClick={()=>{setIsOpenBookMark(!isOpenBookMark)}} alt="오른쪽화살표"/>}
                </div>
                <div className="friends-bookmark__list">
                    {isOpenBookMark && favorite_friends && favorite_friends.map((element,i)=>{
                        return(<>
                        <Link key={i} to={`/ProfileDetail/${element.userId.user_id}`} state={{
                                        name: element.name,
                                        profileImgUrl : element.profileImgUrl,
                                        backgroundImgUrl : element.backgroundImgUrl,
                                        stateMessage : element.stateMessage,
                                        userId : element.userId.user_id
                                    }}>
                            <FriendProfile name={element.name} profileImgUrl={element.profileImgUrl} backgroundImgUrl={element.backgroundImgUrl} stateMessage={element.stateMessage}/>
                            </Link>
                        </>)
                    })}
                </div>

                <div className="subTitle">
                    <h2 className="subTitle__title">친구</h2>
                </div>
                <div className="friends__list">
                    {friends && friends.map((element,i)=>{
                        return(<>
                        <Link key={i} to={`/ProfileDetail/${element.userId.user_id}`} state={{
                                        name: element.name,
                                        profileImgUrl : element.profileImgUrl,
                                        backgroundImgUrl : element.backgroundImgUrl,
                                        stateMessage : element.stateMessage,
                                        userId : element.userId.user_id
                                    }}>
                            <FriendProfile name={element.name} profileImgUrl={element.profileImgUrl} backgroundImgUrl={element.backgroundImgUrl} stateMessage={element.stateMessage}/>
                            </Link>
                        </>)
                    })}
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
            <img src={crewaAI} alt="CrewaAI Image" />
            <div className="profile__info__CrewaAI">
                <span className="profile__nickName__CrewaAI">{crewaAIName}</span>
                <p className="profile__statusMsg__CrewaAI">{crewaAIStatusMsg}</p>
            </div>
        </div>
    </>)
}

function FriendProfile(props){
    const [isThereStatusMsg,setIsThereStatusMsg] = useState(false);
    useEffect(()=>{
        if(props.stateMessage==""){
            setIsThereStatusMsg(false);
        }else{
            setIsThereStatusMsg(true);
        }
    },[])
    return(<>
        <div className="profile__friend">
            <img src={profileImg} alt="친구이미지"/>
            <div className="profile__info__friend">
                <span className="profile__nickName__friend">{props.name}</span>
                {isThereStatusMsg && <p className="profile__statusMsg__friend">{props.stateMessage}</p>}
            </div>
        </div>
    </>)
}
export default Home;