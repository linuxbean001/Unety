const BTU_DIVISOR = 108000;
const DEFAULT_PROPERTY_VALUE = 1300000;
const DEFAULT_REGION = 'Middle Atlantic';
const DEFAULT_TAX_JURISDICTION = 'DC'
const ELECTRIC_DIVISOR = 3413;
const ELECTRIC_RATE = 0.11;
const MULTIPLIER_MONTH_TO_ANNUAL = 13.12150578;
const NATURAL_GAS_RATE = 0.5;
const PACE_RATE = 0.07;
const PACE_TERM = 20;
const SIR_TARGET = 1.2;

const MONTHLY_ENERGY_USAGE = [
  12.29,
  13.10,
  12.67,
  13.12,
  12.42,
  11.32,
  10.34,
  10.17,
  11.13,
  12.03,
  12.90,
  12.50,
];
const TAX_JURISDICTION = {
  'DC': {
    ltvLimits: 0.35,
    taxPeriods: 2,
  },
  'MD (excluding Montgomery County)': {
    ltvLimits: 0.2,
    taxPeriods: 2,
  },
  'Montgomery County, MD': {
    ltvLimits: 0.2,
    taxPeriods: 2,
  },
  'VA': {
    ltvLimits: 0.2,
    taxPeriods: 2,
  },
}

const propertyTypeInfo = {
  'Education': {
    btuPerSqft: 23776/BTU_DIVISOR,
    electricKwhPerSqft: 458 * 1000000000000/12239000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 100,
  },
  'Grocery/Convenience Store' :{
    btuPerSqft: 42332/BTU_DIVISOR,
    electricKwhPerSqft:  208 * 1000000000000/1252000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 150,
  },
  'Café/Restaurants' :{
    btuPerSqft: 124794/BTU_DIVISOR,
    electricKwhPerSqft: 279 * 1000000000000/1819000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 130,
  },
  'Healthcare' :{
    btuPerSqft: 63779/BTU_DIVISOR,
    electricKwhPerSqft: 365 * 1000000000000/4155000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 160,
  },
  'Outpatient Clinic' :{
    btuPerSqft: 25828/BTU_DIVISOR,
    electricKwhPerSqft: 114 * 1000000000000/1781000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 160,
  },
  'Inpatient Hospital' :{
    btuPerSqft: 92249/BTU_DIVISOR,
    electricKwhPerSqft: 251 * 1000000000000/2374000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 160,
  },
  'Lodging' :{
    btuPerSqft: 37933/BTU_DIVISOR,
    electricKwhPerSqft: 304 * 1000000000000/5826000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 250,
  },
  'Multifamily' :{
    btuPerSqft: 37933/BTU_DIVISOR,
    electricKwhPerSqft: 304 * 1000000000000/5826000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 200,
  },
  'EnclosedAndStripMalls' :{
    btuPerSqft: 36842/BTU_DIVISOR,
    electricKwhPerSqft: 424 * 1000000000000/5890000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 200,
  },
  'Retail (other than mall)' :{
    btuPerSqft: 13605/BTU_DIVISOR,
    electricKwhPerSqft: 281 * 1000000000000/5439000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 200,
  },
  'Office' :{
    btuPerSqft: 17678/BTU_DIVISOR,
    electricKwhPerSqft: 865 * 1000000000000/15952000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 250,
  },
  'Religious worship' :{
    btuPerSqft: 19092/BTU_DIVISOR,
    electricKwhPerSqft: 81 * 1000000000000/4557000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 100,
  },
  'Warehouse and storage' :{
    btuPerSqft: 10629/BTU_DIVISOR,
    electricKwhPerSqft: 284 * 1000000000000/13077000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 150,
  },
  'Vacant' :{
    btuPerSqft: 3993/BTU_DIVISOR,
    electricKwhPerSqft: 26 * 1000000000000/3256000000 / ELECTRIC_DIVISOR,
    pricePerSqft: 150,
  },
}

// Mid-Atlantic Region
// New England Region
// Pacific Coastal Region
// Rocky Mountain Region
// Southwest Region
// Midwest Region
// Southern Region

const REGION_INFO = {
  'New England': {
    naturalGaseUse: 111,
    naturalGasRegionRatio: 0.44,
    electricHeatConverted: 172,
    electricRegionMultiplier: 0.37,
    conbimedUse: 283,
    combinedElectricMultiplier: 172/283,
    combinedNaturalGasMultiplier: 111/283
  },
  'Middle Atlantic': {
    naturalGaseUse: 389,
    naturalGasRegionRatio: 1.56,
    electricHeatConverted: 579,
    electricRegionMultiplier: 1.23,
    conbimedUse: 968,
    combinedElectricMultiplier: 579/968,
    combinedNaturalGasMultiplier: 389/968
  },
  'East North Central': {
    naturalGaseUse: 494,
    naturalGasRegionRatio: 1.98,
    electricHeatConverted: 595,
    electricRegionMultiplier: 1.26,
    conbimedUse: 1089,
    combinedElectricMultiplier: 595/1089,
    combinedNaturalGasMultiplier: 494/1089
  },
  'West North Central': {
    naturalGaseUse: 149,
    naturalGasRegionRatio: 0.6,
    electricHeatConverted: 256,
    electricRegionMultiplier: 0.54,
    conbimedUse: 405,
    combinedElectricMultiplier: 256/405,
    combinedNaturalGasMultiplier: 149/405
  },
  'South Atlantic': {
    naturalGaseUse: 305,
    naturalGasRegionRatio: 1.22,
    electricHeatConverted: 978,
    electricRegionMultiplier: 2.08,
    conbimedUse: 1283,
    combinedElectricMultiplier: 978/1283,
    combinedNaturalGasMultiplier: 305/1283
  },
  'East South Central': {
    naturalGaseUse: 104,
    naturalGasRegionRatio: 0.42,
    electricHeatConverted: 241,
    electricRegionMultiplier: 0.51,
    conbimedUse: 345,
    combinedElectricMultiplier: 241/345,
    combinedNaturalGasMultiplier: 104/345
  },
  'West South Central': {
    naturalGaseUse: 207,
    naturalGasRegionRatio: 0.83,
    electricHeatConverted: 590,
    electricRegionMultiplier: 1.25,
    conbimedUse: 797,
    combinedElectricMultiplier: 590/797,
    combinedNaturalGasMultiplier: 207/797
  },
  'Mountain': {
    naturalGaseUse: 163,
    naturalGasRegionRatio: 0.65,
    electricHeatConverted: 229,
    electricRegionMultiplier: 0.49,
    conbimedUse: 392,
    combinedElectricMultiplier: 229/392,
    combinedNaturalGasMultiplier: 163/392
  },
  'Pacific': {
    naturalGaseUse: 328,
    naturalGasRegionRatio: 1.31,
    electricHeatConverted: 600,
    electricRegionMultiplier: 1.27,
    conbimedUse: 928,
    combinedElectricMultiplier: 600/928,
    combinedNaturalGasMultiplier: 328/928
  },
}

function parseNumber(string) {
  if (string === undefined || string === '') {
    return error.value;
  }
  if (!isNaN(string)) {
    return parseFloat(string);
  }
  return error.value;
}

function anyIsError() {
  var n = arguments.length;
  while (n--) {
    if (arguments[n] instanceof Error) {
      return true;
    }
  }
  return false;
};

function pmt(rate, periods, present, future = 0, type = 0) {
  // Credits: algorithm inspired by Apache OpenOffice

  rate = parseNumber(rate);
  periods = parseNumber(periods);
  present = parseNumber(present);
  future = parseNumber(future);
  type = parseNumber(type);
  if (anyIsError(rate, periods, present, future, type)) {
    return error.value;
  }

  // Return payment
  var result;
  if (rate === 0) {
    result = (present + future) / periods;
  } else {
    var term = Math.pow(1 + rate, periods);
    if (type === 1) {
      result = (future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate);
    } else {
      result = future * rate / (term - 1) + present * rate / (1 - 1 / term);
    }
  }
  return -result;
};

// // Parameters are rate, total number of periods, payment made each period and future value
function pv(rate, periods, payment, future = 0, type = 0) {
  future = future || 0;
  type = type || 0;

  rate = parseNumber(rate);
  periods = parseNumber(periods);
  payment = parseNumber(payment);
  future = parseNumber(future);
  type = parseNumber(type);
  if (anyIsError(rate, periods, payment, future, type)) {
    return error.value;
  }

  // Return present value
  if (rate === 0) {
    return -payment * periods - future;
  } else {
    return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
  }
}

const getCBECAnnualElectric = ({propertyType, sqft}) => {
  const { electricKwhPerSqft } = propertyTypeInfo[propertyType];
  return electricKwhPerSqft * sqft * ELECTRIC_RATE;
}

const getCBECAnnualNaturalGas = ({propertyType, sqft}) => {
  const { btuPerSqft } = propertyTypeInfo[propertyType];
  return btuPerSqft * sqft * NATURAL_GAS_RATE;
}

const getEstimatedAnnualElecBill = ({region, monthlyEnergyCost}) => {
  const { combinedElectricMultiplier } = REGION_INFO[region];
  return monthlyEnergyCost * MULTIPLIER_MONTH_TO_ANNUAL * combinedElectricMultiplier
}

const getEstimatedMonthlyElecBill = ({region, monthlyEnergyCost}) => {
  const { combinedElectricMultiplier } = REGION_INFO[region];
  return monthlyEnergyCost * combinedElectricMultiplier / ELECTRIC_RATE
}

const getEstimatedAnnualGasBill = ({region, monthlyEnergyCost}) => {
  const { combinedNaturalGasMultiplier } = REGION_INFO[region];
  return monthlyEnergyCost * MULTIPLIER_MONTH_TO_ANNUAL * combinedNaturalGasMultiplier
}

const getElectricalSavings = ({region, monthlyEnergyCost}) => {
  const estimatedAnnualElecBill = getEstimatedAnnualElecBill({monthlyEnergyCost, region});
}

const getElectricalEnergySavings = ({
  lightingUpgrade,
  monthlyEnergyCost,
  region,
  propertyType,
  sqft,
}) => {
  const { combinedNaturalGasMultiplier } = REGION_INFO[region];
  const estimatedMonthlyElecBill = getEstimatedMonthlyElecBill({monthlyEnergyCost, region});
  const estimatedAnnualElecBill = getEstimatedAnnualElecBill({monthlyEnergyCost, region});
  const kwhSavings = lightingUpgrade ? 0 : estimatedAnnualElecBill * 0.15 * 0.5;
  const CBECAnnualElectric = getCBECAnnualElectric({propertyType, sqft});

  return Math.max(estimatedAnnualElecBill - CBECAnnualElectric, kwhSavings);
}

const getNatualGasSavings = ({region, propertyType, sqft, monthlyEnergyCost}) => {
  const estimatedAnnualGasBill = getEstimatedAnnualGasBill({region, monthlyEnergyCost});
  const CBECAnnualNaturalGas = getCBECAnnualNaturalGas({propertyType, sqft});

  return estimatedAnnualGasBill - CBECAnnualNaturalGas;
}



// ====================

const getAnnualEnergySavings = ({
  propertyType,
  lightingUpgrade,
  region = DEFAULT_REGION,
  sqft,
  monthlyEnergyCost,
}) => {
  const estimatedAnnualElecBill = getEstimatedAnnualElecBill({monthlyEnergyCost, region});
  const estimatedAnnualGasBill = getEstimatedAnnualGasBill({monthlyEnergyCost, region});
  const electricalEnergySavings = getElectricalEnergySavings({
    lightingUpgrade,
    monthlyEnergyCost,
    region,
    propertyType,
    sqft,
  })
  const natualGasSavings = getNatualGasSavings({
    region,
    propertyType,
    sqft,
    monthlyEnergyCost
  })

  const electric = Math.min(estimatedAnnualElecBill *  0.25, electricalEnergySavings);
  const naturalGas = Math.min(estimatedAnnualGasBill * 0.25, natualGasSavings);
  return electric + naturalGas;
}

const getPaceCanFinance = ({
  annualEnergySavings,
  propertyType,
  sqft,
  taxJurisdiction = DEFAULT_TAX_JURISDICTION,
  term = 20
}) => {
  const {
    ltvLimits,
    taxPeriods,
  } = TAX_JURISDICTION[taxJurisdiction];

  const propertyValue = propertyTypeInfo[propertyType].pricePerSqft * sqft
  const ltvProjectSizeLimit = ltvLimits * propertyValue;
  const sirProjectSizeLimit = annualEnergySavings < 0 ? 0 :pv(PACE_RATE/taxPeriods, term * taxPeriods, annualEnergySavings/2);
  const sirTargetProjectSize = Math.abs(sirProjectSizeLimit / SIR_TARGET);

  return Math.min(ltvProjectSizeLimit, sirTargetProjectSize);
}

const getMonthlyPacePayment = ({
  paceAmount,
  taxJurisdiction = DEFAULT_TAX_JURISDICTION,
  term = 20
}) => {
  const {
    taxPeriods,
  } = TAX_JURISDICTION[taxJurisdiction];
  const pacePmt = Math.abs(pmt(PACE_RATE/taxPeriods, term * taxPeriods, paceAmount));
  return Math.max(0, pacePmt/6);
}

const getPaceSavings = ({
  annualEnergySavings,
  paceAmount,
  taxJurisdiction = DEFAULT_TAX_JURISDICTION,
  term = 20
}) => {
  const {
    taxPeriods,
  } = TAX_JURISDICTION[taxJurisdiction];
  const pacePmt = Math.abs(pmt(PACE_RATE/taxPeriods, term * taxPeriods, paceAmount));
  return Math.max(0, (annualEnergySavings/2 - pacePmt) * term);
}

exports.handler = function(event, context, callback) {
  const {
    body
  } = event;

  let data = {};
  try {
    data = JSON.parse(body);
  } catch(e) {
    callback(null, {
      statusCode: 422,
      body: "No data provided"
    });
  }

  console.log('DATA', data);

  const annualEnergySavings = getAnnualEnergySavings(data);
  const paceCanFinance = getPaceCanFinance({
    annualEnergySavings,
    ...data,
  });
  const pacePayments =  getMonthlyPacePayment({
    paceAmount: paceCanFinance
  });

  const paceSavings = getPaceSavings({
    annualEnergySavings,
    paceAmount: paceCanFinance,
    pacePayments,
  })

  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      annualEnergySavings: Math.max(0, Math.round(annualEnergySavings)),
      paceCanFinance: Math.round(paceCanFinance),
      pacePayments: Math.round(pacePayments),
      paceSavings: Math.round(paceSavings)
    })
  })
}
