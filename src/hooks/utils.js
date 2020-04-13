import { useRef, useEffect, useState } from "react";

/**
 * Returns elements dimensions.
 * ! Refs element needs to be wrapped with 
 * @param  {...any} deps 
 */
export const useElementDimensions = (...deps) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const elRef = useRef(null);

    useEffect(() => {
        if(elRef.current !== null) { // TODO: Update dimensions for dynamic content. Now, it won't update when content changes.
            //console.log(elRef.current.getBoundingClientRect(), elRef.current.height, elRef.current.clientHeight,);
            console.log(elRef.current.children[0].clientHeight)
            setWidth(elRef.current.children[0].clientWidth)
            setHeight(elRef.current.children[0].clientHeight)
        }
    }, [elRef, deps]);

    console.log(width, height);

    return [elRef, {width, height}]
}

export const useSignal = () => {
    const [, setSignal] = useState();
    return () => setSignal();
}