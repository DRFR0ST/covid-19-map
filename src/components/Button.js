import React from "react";
import cx from "classnames";

const Button = ({children, className, spaceAround=false, onClick, ...props}) => {
    const handleClick = () => {
        onClick && onClick();
    }
    
    const classes = cx("button", {"button--space-around": spaceAround}, className)

    return <div className={classes} onClick={handleClick} {...props}>{children}</div>
}

export default Button;