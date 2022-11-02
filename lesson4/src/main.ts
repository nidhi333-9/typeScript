// Type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitartist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

type UserId = stringOrNumber

// Literal types

let myName: 'Nidhi'

let userName: 'Nidhi' | 'kumari' | 'Sharma'

userName = 'Sharma'

// functions

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any) => {
    console.log(message);
}

logMsg('Hello!')
logMsg(add(3, 5))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(39, 39))

// Optional parameters

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// Default parameter value
const sumAll = (a: number = 2, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(sumAll(3, 44))
logMsg(addAll(1, 2))
logMsg(sumAll(undefined, 4))

// Rest Parameters

const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(3, 4, 4, 2, 5))

const createError = (errMsg: string) => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// Custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// Use of the Never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    return createError('This should never happen!')
}

