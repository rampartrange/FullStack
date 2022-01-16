import React from "react";
import './SignUp.css'
import login_keys from "../../images/login_keys-removebg.png";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import AuthAPI from "../../services/AuthAPI";
import {withCookies} from "react-cookie";
import {useNavigate} from "react-router";

function SignUp(props) {
    return (
        <div className='signup'>
            <div className="signup-header">
                Virtual closet
            </div>
            <img
                className="login-keys"
                src={login_keys}
            >
            </img>
            <SignUpBlock cookies={props}/>
        </div>
    )
}

function SignUpBlock(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();
    const navigate = useNavigate();
    function RegisterUser() {
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        const password_again = document.getElementById('password_again').value;
        const email = document.getElementById('email').value;

        AuthAPI.RegisterUser(login, email, password).then(data => {
            if (data.status === 201) {
                const {cookies} = props.cookies;
                cookies.set("id", data.data.user.id, { path: "/" });
                cookies.set("token", data.data.token, { path: "/" });
                cookies.set("refresh", data.data.refresh, { path: "/" });
                cookies.set("email", email, {path: "/"});
                navigate("/my_profile");
            } else if (data.status === 400) {
                const text = "Fill all the forms!!!";
                console.log(text);
            }
        })

    }

    return (
        <div className='signup-block'>
            <div className="signup-block-login">
                <div className="signup-block-login-title">
                    Login:
                </div>
                <div className='signup-block-login-form'>
                    <input
                        id="login"
                        className="signup-block-login-form-input"
                        defaultValue="test"
                        {...register("example")} />
                </div>
            </div>
            <div className="signup-block-login">
                <div className="signup-block-login-title">
                    Password:
                </div>
                <div className='signup-block-login-form'>
                    <input
                        id='password'
                        className="signup-block-login-form-input"
                        {...register("example")} />
                </div>
            </div>
            <div className="signup-block-login">
                <div className="signup-block-login-title">
                    Repeat password:
                </div>
                <div className='signup-block-login-form'>
                    <input
                        id='password_again'
                        className="signup-block-login-form-input"
                        {...register("example")} />
                </div>
            </div>
            <div className="signup-block-login">
                <div className="signup-block-login-title">
                    E-mail:
                </div>
                <div className='signup-block-login-form'>
                    <input
                        id='email'
                        className="signup-block-login-form-input"
                        {...register("example")} />
                </div>
            </div>
            <button className={'signup-block-button'}
                    onClick={RegisterUser}
            >
                <div className={'signup-block-button-text'}>
                        Sign up
                </div>
            </button>
        </div>
    );
}

export default withCookies (SignUp);