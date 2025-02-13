import { Fragment } from "react";

// CSS
import classes from "../../styles/index.module.scss";

const PrintStatement = ({ user }) => {

    const renderDateString = (date) => {
        const options = {  year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric',second: 'numeric',minute: 'numeric', hour12: true };
        return new Date(date).toLocaleString("en-US", options)
    };

    const renderContent = () => {
        if (user?.transaction.length) {
            return user?.transaction?.map((txn, idx) => {
                return (
                    <tr key={idx.toString()}>
                        <td>{renderDateString(txn.date)}</td>
                        <td style={{color : `${txn.type === 'WITHDRAW' ? 'red' : 'green'}`}}>{txn.type === 'WITHDRAW' ? '-' : null }{parseFloat(txn.amount).toFixed(2)}</td>
                        <td>{parseFloat(txn.balance).toFixed(2)}</td>
                    </tr>
                )
            })
        } else {
            return (
                <tr>
                    <td colSpan={3}>No Records to Display !!</td>
                </tr>
            )
        }
    }
    return (
        <Fragment>
            <div className={classes.printStatementContainer}>
                <h3>Account Statement: </h3>

                <table id="tableData">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Balance</th>
                        </tr>
                    </thead>

                    <tbody>
                        {renderContent()}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default PrintStatement;