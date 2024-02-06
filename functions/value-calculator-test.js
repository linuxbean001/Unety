const { handler } = require("./value-calculator")

const run = async (...args) => {
  handler(...args)
}

run({
  body: JSON.stringify({
    "buildingOwner": "Owner",
    "propertyType": "EnclosedAndStripMalls",
    "leaseTerm": "",
    "lightingUpgrade": false,
    "sqft": 20000,
    "monthlyEnergyCost": 5000,
  }),
}, {}, (err, resp) => {
  console.log(resp)
})
