import React , {useEffect} from "react";

const Alert = ({alert,removeAlert,list}) => {
    const {msg,type} = alert;

        useEffect(() => {
        let timeOut = setTimeout(() => {
            removeAlert()
        },3000)
        return () => clearTimeout(timeOut);
        },[list])

        return (
            
                <p className={`Alert ${type}`}>
                {msg}
                </p>
        )
}

export default Alert