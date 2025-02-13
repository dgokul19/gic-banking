
// CSS
import classes from "./index.module.scss";


// Assets
import Logo from "../../assets/gic-logo.png";


const TopBarComponent = () => {

    const isSessionExist = sessionStorage.getItem(`app-banking-session`);

    const clearSession = () => {
        sessionStorage.clear();
        window.location.reload();
    };

    return (
        <div className={classes.topContainer}>
            <div className={classes.logo}>
                <img src={Logo} alt="GIC Logo" />
            </div>

            <div className={classes.navRightSide}>
                <ul>
                    <li><i className="fa fa-user"></i></li>
                    <li><i className="fa fa-envelope"></i></li>
                    <li><i className="fa fa-search"></i></li>
                </ul>
                {
                    isSessionExist ? <button className={classes.logoutBtn} onClick={clearSession}><i className="fa fa-sign-out"></i>Proceed to logout</button> : <button className={classes.logoutBtn}><i className="fa fa-question-circle"></i>Get Help</button>
}
            </div>
        </div>
    );
}

export default TopBarComponent;