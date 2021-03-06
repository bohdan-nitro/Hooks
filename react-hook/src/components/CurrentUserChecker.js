import React, {useContext, useEffect} from "react";
import useFetch from "./parts/useFetch";
import {CurrentUserContext} from "../contexts/CurrentUser";
import useLocalStorage from "./parts/useLocalStorage";

const CurrentUserChecker = ({children}) => {
    const [{response}, doFetch] = useFetch("/user");
    const [, setCurrentUserState] = useContext(CurrentUserContext);
    const [token] = useLocalStorage("token")

    useEffect(() => {
        if (!token){
            setCurrentUserState( state => ({
                ...state,
                isLoggedIn: false
            }))
            return
        }
       doFetch()
        setCurrentUserState( state => ({
            ...state,
            isLoading: true
        }))
    }, []);

    useEffect(() => {
        if (!response){
            return
        }
        setCurrentUserState(state => ({
            ...state,
            isLoading: false,
            isLoggedIn: true,
            currentUser: response.user
        }))
    }, [response])

    return children
}
export default CurrentUserChecker;