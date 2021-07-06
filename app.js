const myModule= require("./log")
const getconstants = require("./constants")

console.log(getconstants)
getconstants.productid='rohit'
console.log(getconstants.productid)
console.log(getconstants.clientid)

console.log(myModule.info("this is basic info"))
console.log(myModule.warning("this is warning"))
console.log(myModule.error("this is an error"))