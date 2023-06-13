import Form from "../../components/form/Form";
import styles from './login.module.css';

const Login = function ({login}) {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
            <Form login={login} />
            </div>
        </div>
    )
}

export default Login;