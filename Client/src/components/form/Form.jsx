import { useState } from "react";
import validate from "../../utils/validate";
import styles from './form.module.css';
import footer from "../../assets/Capture.PNG";

const Form = function({login}) {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    

    function handleChange(event) {
        setUserData({
            ...userData,
           [event.target.name]: event.target.value
        });
        setErrors(
            validate({
                ...userData,
                [event.target.name]: event.target.value
            })
        );
    }

    function handleSubmit(event) {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className={styles.container}>
            <h1>Ingresar</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputCont}>
                    <input
                        name="email"
                        type="text"
                        // placeholder="ingresa tu correo"
                        value={userData.email}
                        onChange={handleChange}
                        required
                        />
                    <label>Correo Electrónico</label>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className={styles.inputCont}>
                    <input
                        name="password"
                        type="password"
                        // placeholder="ingresa tu contraseña"
                        value={userData.password}
                        onChange={handleChange}
                        required
                    />
                    <label>Contraseña</label>
                </div>
                {errors.password && <p>{errors.password}</p>}
                {/* //! error de logica? el boton se esta renderizando */}
                {errors.email || errors.password ? null : <button type="submit" className={styles.boton}>Ingresar</button>}
            </form>
            <div>
                {/* <img className={styles.footer} src={footer} alt="footer" /> */}
            </div>
        </div>
    );
}

export default Form;