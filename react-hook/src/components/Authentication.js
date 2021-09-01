import React, {useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import useFetch from "./parts/useFetch"

const Authentication = (props) => {
    const isLogin = props.match.path === "/login";
    const pageTitle = isLogin ? "Sign in" : "Sign up";
    const descriptionLink = isLogin ? "/register" : "/login";
    const descriptionText = isLogin ? "Need an account" : "Have an account";
    const apiUrl = isLogin ? "/users/login" : "/users";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);

    const handleChangePassword = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeUser = (e) => {
        setUserName(e.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()

        const user = isLogin ? {email, password} : {email, password, username}

        doFetch({
            method: 'post',
            data: {
                user
            }
        })
        console.log('values', email, password)
    }

    useEffect(() => {
        if (!response){
            return
        }
        localStorage.setItem("token", response.user.token)
        console.log("response", response)
        setIsSuccessfullSubmit(true)
    }, [response])

    if (isSuccessfullSubmit){
       return  <Redirect to={"/"} />
    }
    return(
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">{pageTitle}</h1>
                        <p className="text-xs-center">
                            <Link to="register">{descriptionText}</Link>
                        </p>
                        <form action="" onSubmit={handleSubmit}>
                            {!isLogin && (
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder={"UserName"}
                                        value={username}
                                        onChange={handleChangeUser}
                                    />
                                </fieldset>
                            )}
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
                                <button disabled={isLoading} className="btn btn-primary btn-lg pull-xs-right" type="submit">{pageTitle}</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Authentication