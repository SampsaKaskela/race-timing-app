import { formatTime, getTimeDifference, getTotalTime } from './utils'

describe('utils', () => {

    describe('formatTime', () => {

        it('should format empty time', () => {
            expect(formatTime(0)).toBe('--:--.---')
        })

        it('should format positive times', () => {
            expect(formatTime(30000)).toBe('00:30.000')
            expect(formatTime(30111)).toBe('00:30.111')
            expect(formatTime(90111)).toBe('01:30.111')
        })

        it('should format negative times', () => {
            expect(formatTime(-30000)).toBe('00:30.000')
            expect(formatTime(-30111)).toBe('00:30.111')
            expect(formatTime(-90111)).toBe('01:30.111')
        })
    })

    describe('getTimeDifference', () => {

        it('should return empty string if there is no difference', () => {
            expect(getTimeDifference(0, 0)).toBe('')
        })

        it('should return positive difference', () => {
            expect(getTimeDifference(30000, 0)).toBe('(+00:30.000)')
            expect(getTimeDifference(90000, 0)).toBe('(+01:30.000)')
            expect(getTimeDifference(90111, 0)).toBe('(+01:30.111)')
        })

        it('should return negative difference', () => {
            expect(getTimeDifference(0, 30000)).toBe('(-00:30.000)')
            expect(getTimeDifference(0, 90000)).toBe('(-01:30.000)')
            expect(getTimeDifference(0, 90111)).toBe('(-01:30.111)')
        })
    })

    describe('getTotalTime', () => {

        it('should return sum of values in array', () => {
            expect(getTotalTime([1000, 1000, 1000])).toBe(3000)
            expect(getTotalTime([2000, 2000, 1000])).toBe(5000)
            expect(getTotalTime([3000, 3000, 1000])).toBe(7000)
        })
    })
})
