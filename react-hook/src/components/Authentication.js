import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Authentication = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChangePassword = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data", email, password)
        setIsSubmitting(true)
    }

    useEffect(() => {
        if (!isSubmitting){
            return;
        }
        console.log("Effect start")
        axios('https://conduit.productionready.io/api/users/login', {
            method: 'post',
            body: {
                user: {
                    email: 'qq@qq.com',
                    password: '123'
                }
            }
        })
            .then(res => {
                console.log('res', res)
                setIsSubmitting(false)
            })
            .catch(error => {
                console.log('error', error)
                setIsSubmitting(false)
            })
    })

    return(
        <div className={"auth-page"}>
            <div className="container page">
                <div className="row">
                    <div className={"col-md-6 offset-md-3 col-xs-12"}>
                        <h1 className={"text-xs-center"}>Login</h1>
                        <p className="text-xs-center">
                            <Link to={"register"}>Need an account?</Link>
                        </p>
                        <form action="" onSubmit={handleSubmit}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder={"Email"}
                                        value={email}
                                        onChange={handleChangePassword}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder={"Password"}
                                        value={password}
                                        onChange={handleChangeEmail}/>
                                </fieldset>
                                <button disabled={isSubmitting} className={"btn btn-primary btn-lg pull-xs-right"} type={"submit"}>Sign in</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Authentication