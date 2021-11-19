import React from "react";
import login_keys from "../../images/login_keys-removebg.png";
import {useForm} from "react-hook-form";
import './SignIn.css';

export default function SignIn() {
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
            <LoginBlock/>
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

    return (
        <div className='login-block'>
            <div className="login-block-login">
                <div className="login-block-login-title">
                    Login:
                </div>
                <div className='login-block-login-form'>
                    <input
                        className="login-block-login-form-input"
                        defaultValue="test"
                        {...register("example")} />
                </div>

            </div>
            {/*<button>*/}

            {/*</button>*/}
        </div>
    );
}

