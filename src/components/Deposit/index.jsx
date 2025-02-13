import { Fragment, useState } from "react";

// Utils
import { NAV_MENU, NAV_KEYS } from "../../utils/constants";


// CSS
import classes from "../../styles/index.module.scss";

const DepositComponent = ({ activeKey, setActiveKey, user, updateDetails }) => {
    const [deposit, setDeposit] = useState('');
    const [previousDeposit, setPreviousDeposit] = useState(0);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { value } = e.target || {};
        setDeposit(value);
    };

    const handleSubmit = () => {
        if (!deposit) {
            alert(`Please enter a valid deposit amount !!`);
        }
        let currentDate = new Date();
        let userBalance = user.balance += parseFloat(parseFloat(deposit).toFixed())

        let newTxn = { date: currentDate, amount: deposit, type: `DEPOSIT`, balance: userBalance };
        updateDetails(prevState => {
            prevState.balance = userBalance
            prevState.transaction.push(newTxn);
            return { ...prevState };
        });
        setPreviousDeposit(deposit);
        setDeposit('');
        setSuccess(true);
    };

    const updateContent = (menu_key) => {
        setActiveKey(menu_key);
        setSuccess(false);
    }

    const renderContent = () => {
        if (!success) {
            return (
                <Fragment>
                    <h2>Please enter the amount to Deposit</h2>
                    <div className={classes.formGroup}>
                        <input id="deposit_input" type="number" placeholder={`Deposit Amount (e.g: 500.00)`} name={`deposit`} value={deposit} onChange={handleChange} />
                        <span id="depositFireEvent" onClick={() => handleSubmit()}><i className="fa fa-send"></i></span>
                    </div>
                </Fragment>
            );
        } 
            return (
                <Fragment>
                    <h2 className="success-text">Thank you. ${previousDeposit} has been deposited to your account.</h2>
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

export default DepositComponent;