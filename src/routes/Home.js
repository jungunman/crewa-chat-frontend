import home from "./css/Home.css";
import magnifier from './../images/icons/magnifier.png';
import { useDispatch, useSelector } from "react-redux";
function Home(props){
    const {profileImgUrl,nickName,statusMsg} =useSelector((state)=>state.userInfo)
    const dispatch = useDispatch();
    return (
        <>
         <div className="main-screen">
            <header className="header__home pd-t-70 mg-bt-30">
                <h3 className="header__title">친구</h3>
                <div className="header__icons">
                    <img className="header__icon" src={`${process.env.PUBLIC_URL}/images/icons/magnifier.png`} alt="검색하기"/>
                </div>
            </header>
            <main className="main__home">
                <Profile profileImgUrl={profileImgUrl}/>
            </main>
         </div>

        </>
    )
}

function Profile(props){
    return (
        <>
        <div className="profile">
            <img src={props.profileImgUrl} alt="프로필 사진" />
            <div className="profile__info">
                <span className="profile__nickName">My name</span>
                <p className="profile__statusMsg">상태 메세지</p>
            </div>
        </div>
        </>
    )
}

export default Home;