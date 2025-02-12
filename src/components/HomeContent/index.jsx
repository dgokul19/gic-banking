import { Fragment } from "react";

// Utils
import { NAV_MENU, NAV_KEYS } from "../../utils/constants";

// CSS
import classes from "../../styles/index.module.scss";


const HomeContent = ({ user, activeKey, setActiveKey }) => {
    return (
        <Fragment>
            <h1>Welcome to AwesomeGIC Bank! </h1>
            <p>Your Current Account Balance is: <span>{user?.balance || 0}</span></p>

            <h3>What would you like to do?</h3>

            <div className={classes.navButtons}>
                {NAV_KEYS.map(menu_key => <button
                    key={menu_key}
                    className={activeKey === menu_key ? classes.activeNav : null}
                    onClick={() => setActiveKey(menu_key)}>{NAV_MENU[menu_key]}</button>)}
            </div>
        </Fragment>
    );
}

export default HomeContent;