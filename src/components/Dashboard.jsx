import { Fragment, useState } from "react";

// Components
import TopBarComponent from "./TopBar/";
import NavigationComponent from "./NavigationBar/";
import HomeContent from "./HomeContent/";
import DepositComponent from "./Deposit/";
import WithdrawComponent from "./Withdraw/";
import PrintStatement from "./PrintStatement";
import QuitContent from "./QuitComponent";
import FooterComponent from "./Footer/";

// Utils
import { USER_DETAILS, NAV_KEYS } from "../utils/constants";

// CSS
import classes from "../styles/index.module.scss";


const Dashboard = () => {
    const [activeKey, setActiveKey] = useState(null);
    const [userDetails, setUserDetails] = useState({ ...USER_DETAILS });


    const renderContentSection = () => {
        switch (activeKey) {
            case NAV_KEYS[0]:
                return <DepositComponent activeKey={activeKey}  setActiveKey={setActiveKey} user={userDetails} updateDetails={setUserDetails}/>;
            case NAV_KEYS[1]:
                return <WithdrawComponent activeKey={activeKey}  setActiveKey={setActiveKey} user={userDetails} updateDetails={setUserDetails}/>;
            case NAV_KEYS[2]:
                return <PrintStatement user={userDetails} />;
            case NAV_KEYS[3]:
                return <QuitContent user={userDetails} />;
            default:
                return <HomeContent  user={userDetails} activeKey={activeKey} setActiveKey={setActiveKey} />
        }
    };

    return (
        <Fragment>
            <div className={classes.mainContainer}>
                <div className="container">
                    <TopBarComponent />
                    <NavigationComponent user={userDetails} updateContent={setUserDetails} activeKey={activeKey} updateActiveKey={setActiveKey} />
                    <div className={classes.dashboardContainer}>
                        {renderContentSection()}
                    </div>
                    <FooterComponent />
                </div>
            </div>
        </Fragment>
    );
}

export default Dashboard;