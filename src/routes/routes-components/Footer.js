import { useSelector } from 'react-redux';
import footers from './../css/components/footers.css';
import { useNavigate } from 'react-router-dom';


function Footer(props){
    const {home,chat,setting} = useSelector((status)=> status.footerSelectionStatus);
    const navigator = useNavigate();
    return(
        <>
            <footer className="footer__home">
                <nav className='footer__nav'>
                    <ul className='footer__ul'>
                        <li className='footer__li' onClick={()=>{navigator("/Home")}}>
                            <div className={home} alt="홈"></div>
                        </li>
                        <li className='footer__li' onClick={()=>{navigator("/Chats")}}>
                            <div className={chat} alt="채팅"></div>
                        </li>
                        <li className='footer__li'>
                           <div className={setting} alt="채팅"></div>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Footer;