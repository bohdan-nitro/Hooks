import React from "react";

const BackendMessages = ({backendErrorMessage}) => {
    console.log("backend", backendErrorMessage)
    const errorMessages = Object.keys(backendErrorMessage).map(name => {
        const messages = backendErrorMessage[name].join(" ")
        return `${name} ${messages}`
    })
    return (
        <ul className={"error-messages"}>
            {errorMessages.map(errorMessage => {
                return <li key={errorMessage}>{errorMessage}</li>
            })}
        </ul>
    )
}
export default BackendMessages;