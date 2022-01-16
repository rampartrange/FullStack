import React from "react";
import login_keys from "../../images/login_keys-removebg.png";
import google_logo from "../../images/logo googleg 48dp.png"
import {useForm} from "react-hook-form";
import './SignIn.css';
import {withCookies} from "react-cookie";
import {useNavigate} from "react-router";
import AuthAPI from "../../services/AuthAPI";

function SignIn(props) {
    return (
        <div className="login">
            <div className='login-header'>
                Virtual closet
            </div>
            <img
                className="login-keys"
                src={login_keys}
            >
            </img>
            <LoginBlock cookies={props}/>
        </div>
    );
}

function LoginBlock(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();
    const navigate = useNavigate()

    function Login() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        AuthAPI.Login(email, password).then(data => {
            if (data.status === 200) {
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
        <div className='login-block'>
            <div className="login-block-login">
                <div className="login-block-login-title">
                    Email:
                </div>
                <div className='login-block-login-form'>
                    <input
                        id='email'
                        className="login-block-login-form-input"
                        defaultValue="test"
                        {...register("example")} />
                </div>
            </div>
            <div className="login-block-login">
                <div className="login-block-login-title">
                    Password:
                </div>
                <div className='login-block-login-form'>
                    <input
                        id='password'
                        className="login-block-login-form-input"
                        defaultValue="test"
                        {...register("example")} />
                </div>
            </div>
            <div className={'login-block-buttons'}>
                <button className={'login-block-button'}
                        onClick={Login}
                >
                    <div className='login-block-button-text'>
                        Login
                    </div>
                </button>

                <button className={'login-block-button'}
                        onClick={() => navigate('/sign_up')}
                >
                    <div className={'login-block-button-text'}>
                            Sign up
                    </div>
                </button>
                <button className={'login-block-button'}>
                    <img
                        className="google-logo"
                        src={google_logo}
                    >
                    </img>
                    <div className='login-block-button-text'>
                        Continue with google
                    </div>
                </button>
            </div>
        </div>
    );
}

export default withCookies (SignIn);
