import React from "react";
import Flex from "../Flex";
import { useSpring, animated } from "react-spring";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import { useElementDimensions } from "../../hooks/utils";

const classes = Object.freeze({
    root: "expansion-panel",
    head: "expansion-panel-head",
    title: "expansion-panel-head-title",
    description: "expansion-panel-head-description",
    content: "expansion-panel-content"
});

/**
 * Expansion panel component.
 * @see {@link https://material.io/archive/guidelines/components/expansion-panels.html# Material Designs implementation of Expansion Panels}.
 */
export const ExpansionPanel = ({ children, ...props }) => {
    return <div className={classes.root} {...props}>{children}</div>;
}

/**
 * Expansion panel head component.
 * @param {React.Node} param0 children @see {@link ExpansionPanelTitle} and {@link ExpansionPanelDescription}
 */
export const ExpansionPanelHead = ({ children, open=false, ...props }) => {
    return <Flex className={classes.head} justifyContent="space-between" alignItems="center" {...props}>
        {children}
        <ArrowIcon className={open ? "country__icon--expanded" : "country__icon"} />
    </Flex>
}

/**
 * Expansion panel title component. Commonly used with {@link ExpansionPanelHead} wrapping.
 * @param {React.Node} param0 children 
 */
export const ExpansionPanelTitle = ({ children, ...props }) => {
    return <h4 className={classes.title} {...props}>{children}</h4>
}

/**
 * Expansion panel description component. Commonly used with {@link ExpansionPanelHead} wrapping.
 * @param {React.Node} param0 children 
 */
export const ExpansionPanelDescription = ({ children, ...props }) => {
    return <span className={classes.description} {...props}>{children}</span>
}

/**
 * Expansion panel content component.
 * @param {React.Node} param0 children 
 */
export const ExpansionPanelContent = ({ children, open=false, style, ...props }) => {
    const [ref, dimensions] = useElementDimensions(open);
    const animation = useSpring({height: open ? dimensions.height + 20 : 0})

    const _style = {
        ...animation,
        ...style
    }

    return <animated.div ref={ref} className={classes.content} style={_style} {...props}><div>{children}</div></animated.div>
}

/**
 * Expansion panel actions component.
 * @param {React.Node} param0 children 
 */
export const ExpansionPanelActions = ({ children, ...props }) => {
    // ? Not so sure if it will align the actions on top of each other in narrow space.
    return <Flex justifyContent="flex-end" alignItems="center" {...props}>
        {children}
    </Flex>
}