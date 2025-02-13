import { Fragment, useState } from "react";

// Utils
import { NAV_MENU, NAV_KEYS } from "../../utils/constants";


// CSS
import classes from "../../styles/index.module.scss";

const WithdrawComponent = ({ activeKey, setActiveKey, user, updateDetails }) => {
    const [withdraw, setWithdraw] = useState('');
    const [previousAmount, setPreviousAmount] = useState(0);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { value } = e.target || {};
        setWithdraw(value);
    };

    const handleSubmit = () => {
        if (!withdraw) {
            alert(`Please enter a valid withdraw amount !!`);
            return;
        }
        let currentDate = new Date();
        let userBalance = user.balance - parseFloat(parseFloat(withdraw).toFixed());

        if((user.balance - parseFloat(withdraw)) < 0) {
            alert(`Insufficient funds..`);
            return;
        } else {
            let newTxn = { date: currentDate, amount: withdraw, type: `WITHDRAW`, balance: userBalance };
        updateDetails(prevState => {
            prevState.balance = userBalance
            prevState.transaction.push(newTxn);
            return { ...prevState };
        });
        setPreviousAmount(withdraw);
        setWithdraw('');
        setSuccess(true);
        }        
    };

    const updateContent = (menu_key) => {
        setActiveKey(menu_key);
        setSuccess(false);
    }

    const renderContent = () => {
        if (!success) {
            return (
                <Fragment>
                    <h2>Please enter the amount to Withdraw</h2>
                    <div className={classes.formGroup}>
                        <input id="withDrawField" type="number" placeholder={`Withdraw Amount (e.g: 500.00)`} name={`withdraw`} value={withdraw} onChange={handleChange} />
                        <span id="withdrawTrigger" onClick={() => handleSubmit()}><i className="fa fa-send"></i></span>
                    </div>
                </Fragment>
            );
        } 
            return (
                <Fragment>
                    <h2 className="success-text">Thank you. ${previousAmount} has been withdrawn from your account.</h2>
                    <h3>Is there anything else you'd like to do? </h3>
                    <div className={classes.navButtons}>
                        {NAV_KEYS.map(menu_key => <button
                            key={menu_key}
                            className={activeKey === menu_key ? classes.activeNav : null}
                            onClick={() => updateContent(menu_key)}>{NAV_MENU[menu_key]}</button>)}
                    </div>
                </Fragment>
            )
    };

    return (
        <div className={classes.contentSection}>
            {renderContent()}
        </div>
    );
}

export default WithdrawComponent;