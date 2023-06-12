import { useSelector } from 'react-redux';
import header from './../css/components/headers.css';


function Header(props){
    const {headerTitle,leftIconClassName,rightIconClassName} = useSelector((status) => status.headerSelectionStatus);
    return(
        <>
        <header className="header">
                <div className="header__column pd-lf-25">
                    <div className={leftIconClassName}/>
                </div>
                <div className="header__column">
                    <h3 className="header__title">{headerTitle}</h3>
                </div>
                <div className="header__column pd-rg-25">
                    <div className={rightIconClassName}/>
                </div>
        </header>
        </>
    )
}

export default Header;