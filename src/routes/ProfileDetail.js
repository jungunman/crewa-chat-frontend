import { useParams } from "react-router-dom";
import leftArrowIcon from "./../images/arrows/arrow-type2-left.png";
import settingIcon from "./../images/icons/settings_icon.png";
import chatIcon from "./../images/icons/chat_icon_clicked.png";
import basicProfileImg from "./../images/basic_profile_imgs/basic-profile-1.png";
import cameraXs from "./../images/icons/camera_xs.png";
import pen from "./../images/icons/pen.png";
import basic from "./css/elements/basic.css";
import "./css/ProfileDetail.css";
import "./css/elements/void.css";
import { useState } from "react";

function ProfileDetail(props){
    const {userId} = useParams();
    const [isClickChange,setIsClickChange] = useState(false);
    return (<>    
        <div className="main-screen pd-lf-rg-20 basic-bg-img">
            <div className="profile-detail">
                {/* 밑을 헤더로 바꾸고, icons를 따로 만들어야 친구 Profile Detail 볼 때 이모티콘 여러개 쉽게 넣을 수 있을 듯. 친구들 본다고 할땐 어떻게 분기지을까? */}
                <div className="profile-detail__icons">
                    <img className="profile-detail__icon" src={leftArrowIcon} />
                    {!isClickChange && <img onClick={()=>{setIsClickChange(!isClickChange)}} className="profile-detail__icon" src={settingIcon} />}
                    {isClickChange && <p onClick={()=>{setIsClickChange(!isClickChange)}} className="profile-detail__icon-text">완료</p>}
                </div>
                <div className="profile-detail__infos">
                    <div className="profile-detail__img">
                        <img className="profile-detail__img-basic" src={basicProfileImg} alt="기본 사진"/>
                        {isClickChange && <div className="profile-detail__circle"><img className="icons__camera-xs" src={cameraXs}/> </div>}
                    </div>
                    <p className="profile-detail__name">Name{isClickChange&&<img src={pen} className="icons__pen"/>}</p>
                    <div className="profile-detail__division-line"></div>
                    <p className="profile-detail__statusMsg">상태메세지{isClickChange&&<img src={pen} className="icons__pen"/>}</p>
                    
                    {!isClickChange && <div  className="profile-detail__contents">
                        <div className="profile-detail__content">
                            <img src={chatIcon} className="profile-detail__content-icon" />
                            <p className="profile-detail__content-name">나와의 채팅</p>
                        </div>
                    </div>}
                    {isClickChange && <div className="void--profile-detail__contents--61px"></div>}
                </div>
            </div>
        </div>
        </>)
}

export default ProfileDetail;

// userid로 user의 기본 정보에 접근해서, 이름, 이미지, 상태명등을 초기화하고,
// 데이터를 뿌려주면 된다. 
// 설정모드일 때, 아닐 때, 사진을 누를 때 분기를 나눠서 모드를 변경해야 함.
