import React from "react";
import cx from "classnames";
import Flex from "./Flex";

export const Section = ({ children, title, className, onClick, style, color, ...props }) => {
    const handleClick = () => {
        onClick && onClick();
    }

    const _style = {
        ...style,
        borderColor: color // TODO: branding color
    }

    return <div className={cx("section", className)} onClick={handleClick} style={_style} {...props}>
        {title && <p className={cx("section-title", color)}>{title}</p>}
        <Flex justifyContent="space-evenly" alignItems="baseline">
            {children}
        </Flex>
    </div>
}

export const SectionStatistic = ({ value, label, className, color, ...props }) => {
    
    return <div className={cx("section-statistic", className)} {...props}>
        <h3 className={cx(color)}>{value}</h3>
        <p style={{marginBottom: 0}}>{label}</p>
    </div>
}