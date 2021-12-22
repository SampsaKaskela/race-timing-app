import { useEffect, useLayoutEffect, useRef } from 'react'

const useInterval = (callback, interval) => {
    const savedCallback = useRef(callback)

    useLayoutEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        if (!interval && interval !== 0) {
            return
        }
        console.log(interval)
        const id = setInterval(() => {
            console.log('test'); savedCallback.current()
        }, interval)
        return () => clearInterval(id)
    }, [interval])
}


export default useInterval
