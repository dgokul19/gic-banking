
// CSS
import classes from "./index.module.scss";

// Utils
import { NAV_MENU, NAV_KEYS } from "../../utils/constants"; 

const NavigationComponent = ({ user, updateContent, activeKey, updateActiveKey }) => {

    const handleNavigation = (newKey) => {
        if(newKey === NAV_KEYS[3]){
            updateContent({ balance : 0, transaction : [] });
        }
        updateActiveKey(newKey);
    };
    return (
        <div className={classes.navigationContainer}>
            <ul id="nav-element">
                {NAV_KEYS.map(menu_key => <li 
                    key={menu_key}
                    id={menu_key}
                    className={activeKey === menu_key ? classes.activeNav : null}
                    onClick={() => handleNavigation(menu_key)}>{NAV_MENU[menu_key]}</li>)}
            </ul>

            <div className={classes.accountBalance} id="accountBalance">
                Account Balance is :  <strong> ${(user?.balance || 0).toFixed(2)}</strong>
            </div>
        </div>
    );
}
 
export default NavigationComponent;