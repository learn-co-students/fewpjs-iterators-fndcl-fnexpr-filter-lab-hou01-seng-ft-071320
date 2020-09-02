// Code your solution here
const findMatching = (drivers, string) =>{
    let selectedDrivers = drivers.filter(x =>{
        return x.toUpperCase() === string.toUpperCase()
    })
    return selectedDrivers
}


const fuzzyMatch = (drivers, string) => {
    let stringLength = string.length
    let selectedDrivers = drivers.filter(x => {
        return x.slice(0, stringLength) === string
    })
    return selectedDrivers
}

const matchName = (drivers, string) => {
    let selectedDrivers = drivers.filter(x => {
        debugger
        return x.name === string
    })
    return selectedDrivers
}