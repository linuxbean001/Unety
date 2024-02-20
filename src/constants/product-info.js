import applicationFilters from 'images/products/lender/application-filters.png'
import applicationRatings from 'images/products/lender/application-ratings.png'
import hotApplications from 'images/products/lender/hot-application.png'
import propertyInformation from 'images/products/lender/property-information.png'
import risk from 'images/products/lender/risk.png'

import checkmark from 'images/products/go-no-go/checkmark.png';
import checkmarkMobile from 'images/products/go-no-go/checkmark-mobile.png';
import coverage from 'images/products/go-no-go/coverage.png';
import reasons from 'images/products/go-no-go/reasons.png';
import reasonsMobile from 'images/products/go-no-go/reasons-mobile.png';

import bestMatch from 'images/products/funding-options/best-match.png';
import personalCriteria from 'images/products/funding-options/personal-criteria.png';
import products from 'images/products/funding-options/products.png';
import results from 'images/products/funding-options/results.png';
import understandingPricing from 'images/products/funding-options/understanding-pricing.png';

import bottomLine from 'images/products/value-calculator/bottom-line.png';
import compareCost from 'images/products/value-calculator/compare-costs.png';
import financialForecast from 'images/products/value-calculator/financial-forecast.png';

// import applyForFinancing from 'images/products/your-adventure/apply-for-financing.png';
// import projectNav from 'images/products/your-adventure/project-nav.png';
// import connectWithContractors from 'images/products/your-adventure/connect-with-contractors.png';
import identify from 'images/products/projects-and-leads/identify.png';
import inboundLeads from 'images/products/projects-and-leads/inbound-leads.png';
import manageProjects from 'images/products/projects-and-leads/manage-projects.png';

export const lenderProductFeatures = [
  {
    features: [
      {
        description: 'Easily make snap decisions with a clean view of all the most relevant qualifying conditions for each application.',
        label: 'Property information',
        screenshot: propertyInformation,
      },
      {
        description: 'Shadow credit ratings approximate rating agency scores; driven by our propritary scoring engine that processes hundreds of raw data points per property.',
        label: 'Application ratings',
        screenshot: applicationRatings,
      },
      {
        description: 'Customize acceptable risk thresholds for these key conditions whenever you want by adjusting your preference settings.',
        label: 'Risks',
        screenshot: risk,
      },
      {
        description: 'Identify which applications are most serious about quickly closing with you.',
        label: 'Hot application',
        screenshot: hotApplications,
      },
      {
        description: 'Browse through hundreds of applications from across the country in seconds and filter according to your priorities.',
        label: 'Application filters',
        screenshot: applicationFilters,
      },
    ],
    subTitle: 'Tools for',
    title: 'Sustainable Financiers',
  }
];

export const contractorProductFeatures = [
  {
    features: [
      {
        description: 'Manage, sort, and filter all of your projects in one place. Whether its a project you added yesterday or last year you can find it here',
        label: 'Manage your projects',
        screenshot: manageProjects,
      },
      {
        description: 'Identify the best financing for your projects and whether they are a good candidate for that financing.',
        label: 'Identify',
        screenshot: identify,
      },
    ],
    subTitle: 'Tools for ESG Professionals',
    title: 'Manage projects',
  },
  {
    features: [
      {
        description: 'Prequalify a property in seconds. Just enter a property address and immediately discover if it meets the minimum program requirements for financing.',
        label: 'Validation',
        mobileScreenshot: checkmarkMobile,
        screenshot: checkmark,
      },
      {
        description: 'Explanations tailored to each property appear with the Validation results. If preapproved, few details are needed. If not preapproved, extra details are provided.',
        label: 'Explanations',
        mobileScreenshot: reasonsMobile,
        screenshot: reasons,
      },
      {
        description: 'Over 90% of the commercial properties across the U.S. can be scored by simpling entering the address.',
        label: 'Coverage',
        screenshot: coverage,
      },
    ],
    subTitle: 'Tools for ESG Professionals',
    title: 'Project screening',
  },
  {
    features: [
      {
        description: 'See which option is the best match for your property based on your unique needs. Every project is unique, and so are the results for your best match. ',
        label: 'Customized suggestions',
        screenshot: bestMatch,
      },
      {
        description: 'Get access to many of the special types of financing that large corporations have long benefited from. Our platform makes them directly available to you.',
        label: 'Many products to choose from',
        screenshot: products,
      },
      {
        description: 'Customize your criteria according to your own unique needs. This ensures your get matched with a type of financing that is the best fit for you. ',
        label: 'Your personal criteria',
        screenshot: personalCriteria,
      },
      {
        description: 'Explore the results in detail. Each result and criteria comes with a explanation that is unique to you.',
        label: 'Detailed explanations of results',
        screenshot: results,
      },
    ],
    subTitle: 'Tools for ESG Professionals',
    title: 'Funding options',
  },
  {
    features: [
      {
        description: 'Adjust the controls to match the occupancy conditions of your building in order to get a more comprehensive forecast of the financial costs of benefits and financing. ',
        label: 'Financial forecasts specific to your building',
        screenshot: financialForecast,
      },
      {
        description: 'Compare costs of capital. It\'s important to understand how to compare the costs since cash isn\'t free and some interest rates hide hidden charges.',
        label: 'Compare costs',
        screenshot: compareCost,
      },
      {
        description: 'Find out how much you can save or even profit by using certain types of financing. And, if you have tenants, how might they be impacted.',
        label: 'Your bottom line',
        screenshot: bottomLine,
      },
    ],
    subTitle: 'Tools for ESG Professionals',
    title: 'Cash flow calculator',
  },
]
