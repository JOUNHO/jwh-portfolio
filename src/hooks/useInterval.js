//특정 시간동안 반복적인 reveal 효과를 나타내기 위한 커스텀 훅

import {useEffect, useState} from "react";

const useInterval= (delay,callback= ()=>{}) => {
    const [show,setShow] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!show) {
                callback();
            }
            setShow(!show);
        }, delay);
        return () => {
            clearInterval(timer)
        };
    }, [show]);

    return show;
}
export default useInterval;