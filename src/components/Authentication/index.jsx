import { Fragment, useState } from "react";

// Components
import TopBarComponent from "../TopBar";
import FooterComponent from "../Footer";

// CSS
import classes from "../../styles/index.module.scss";


const Authentication = ({ successCallback }) => {

    const [ form, setForm ] = useState({
        userName : '',
        password : ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target || {};
        setForm({
            ...form,
            [name] : value
        })
    };  

    const handleSubmit = () => {
        const { userName, password } = form;
        if(!userName || !password) {
            alert(`Please enter username and password !!`);
            return;
        }
        if(userName === 'admin' && password === 'admin') {
            sessionStorage.setItem(`app-banking-session`, `app-banking-session-12345`);
            window.location.reload();
        } else {
            alert(`Invalid username or password !!`);
            return;
        }
    };

    return (
        <Fragment>
            <div className={classes.mainContainer}>
                <div className="container">
                    <TopBarComponent />
                    <div className={classes.authContainer}>
                        <form className={classes.formGroup}>
                            <h2>Create an Account !!</h2>
                            <span>( Username : admin; Password : admin ) </span>
                            <div className={classes.formRow}>
                                <label>Username</label>
                                <input name={`userName`} placeholder={`Enter an username..`} value={form.userName} onChange={handleChange}/>
                            </div>

                            <div className={classes.formRow}>
                                <label>Password</label>
                                <input type={`password`} name={`password`} placeholder={`Enter an password..`} value={form.password} onChange={handleChange}/>
                            </div>
                            <div className={classes.btnProceed} onClick={handleSubmit}>
                                 Proceed
                            </div>
                        </form>
                    </div>
                    <FooterComponent />
                </div>
            </div>
        </Fragment>
    );
}

export default Authentication;