import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = url => {
    const baseUrl = "https://conduit.productionready.io/api";
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});

    const doFetch = (options = {}) => {
        setOptions(options)
        setIsLoading(true)
    };
    useEffect(() => {
        if (!isLoading){
            return;
        }
        console.log("Effect start")
        axios(baseUrl + url, options)
            .then(res => {
                console.log('res', res)
                setResponse(res.data)
                setIsLoading(false)
                //Все ответы приходят в res.data
            })
            .catch(error => {
                console.log('error', error)
                setError(error.response.data)
                setIsLoading(false)
            })
    }, [isLoading, options, url])

    return [{isLoading, response, error}, doFetch]
}
export default useFetch;