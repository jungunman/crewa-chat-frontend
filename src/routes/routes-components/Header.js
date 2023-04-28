import header from './../css/components/headers.css';


function Header(props){
    return(
        <>
        <header className="header">
                <div className="header__column">
                    <img  className="header__icon"/>
                </div>
                <div className="header__column">
                    <h3 className="header__title">Friend List</h3>
                </div>
                <div className="header__column">
                    <img className="header__icon" src={require("./../../images/icons/magnifier.png")} alt="검색하기"/>
                </div>
        </header>
        </>
    )
}

export default Header;