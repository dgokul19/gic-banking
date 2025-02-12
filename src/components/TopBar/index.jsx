
// CSS
import classes from "./index.module.scss";


// Assets
import Logo from "../../assets/gic-logo.png";


const TopBarComponent = () => {
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
                <button className={classes.logoutBtn}><i className="fa fa-sign-out"></i>Proceed to Logout</button>
            </div>
        </div>
    );
}

export default TopBarComponent;