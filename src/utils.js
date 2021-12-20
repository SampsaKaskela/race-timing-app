export const formatTime = (ms) => {
    if (ms === 0) {
        return '--:--.---'
    }
    const floor = ms < 0 ? Math.ceil : Math.floor
    const minutes = Math.abs(floor(ms / 60000, 1, -1))
    const minutesString = String(minutes).padStart(2, '0')
    const seconds = Math.abs(floor((ms % 60000) / 1000, 1, -1))
    const secondsString = String(seconds).padStart(2, '0')
    const milliseconds = Math.abs(ms % 1000)
    const millisecondsString = String(milliseconds).padStart(3, '0')
    return `${minutesString}:${secondsString}.${millisecondsString}`
}

export const getTimeDifference = (time1ms, time2ms) => {
    const difference = time1ms - time2ms
    if (difference === 0) {
        return ''
    }
    const prefix = time1ms < time2ms ? '-' : '+'
    return `(${prefix}${formatTime(difference)})`
}

export const getTotalTime = (splits) => {
    return splits.reduce((accumulator, a) => accumulator + a, 0)
}
