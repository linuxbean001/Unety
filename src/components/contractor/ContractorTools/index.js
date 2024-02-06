import React from 'react';
import ToolItem from './ToolItem';
import manageProjects from 'images/contractor-signup/manage-projects.png';
import fundingOptions from 'images/contractor-signup/funding-options.png';
import projectScreening from 'images/contractor-signup/project-screening.png';
import reports from 'images/contractor-signup/reports.png';

const getCopy = ({ version }) => {
  if (version === 'ecoAmerica') {
    return {
      title: 'Tools to support the program',
    };
  }

  return {
    title: 'Tools for you',
  };
};

const TOOL_ITEMS = {
  screening: <ToolItem
    key="screening"
    imgSrc={projectScreening}
    title="Project screening"
    description="Prequalify a property in seconds. Just enter a property address and immediately discover if it meets the minimum program requirements for financing."
  />,
  screeningV1: <ToolItem
    key="screening"
    imgSrc={projectScreening}
    title="Project screening"
    description="You can also use the Unety platform for your existing or prospective clients. Prequalify any commercial building for PACE, Equipment Finance, Equipment Leases, PPAs, and nonrecourse loans. Our specially-designed applicant approval score is based on the credit quality and risks of the property. The score tells you the chances of being approved by dozens of registered capital providers and how much funding the property will likely receive. All you need to do is enter the property address to immediately see the score."
  />,
  funding: <ToolItem
    key="funding"
    imgSrc={fundingOptions}
    title="Funding options"
    description="See which option is the best match for your property based on your unique needs. Every project is unique, and so are the results for your best match."
  />,
  fundingV1: <ToolItem
    key="funding"
    imgSrc={fundingOptions}
    title="Funding options"
    description="For leads from our platform or any of your existing clients, increase the likelihood that you win their next project by introducing them to funding options. We provide dozens of funding options to choose from, all offered by reputable lenders from across the country. You are free to choose any option you like, and we make them easy to navigate. We provide a comparison of the options based on sophisticated algorithms that forecast which option is the best match for your client’s property and unique needs."
  />,
  fundingV2: <ToolItem
    key="funding"
    imgSrc={fundingOptions}
    title="Smart project funding"
    description="Help win your next project opportunity by introducing property owners to more project funding options. Choose from dozens of funding options, all offered by reputable lenders from across the country. You can choose any option you like, and we make them easy to navigate. We provide a comparison of the options based on sophisticated algorithms that forecast which option is the best match for your client’s property and unique needs, including detailed explanations."
  />,
  manage: <ToolItem
    key="manage"
    imgSrc={manageProjects}
    title="Manage your projects"
    description="Manage, sort, and filter all of your projects in one place. Whether its a project you added yesterday or last year you can find it here."
  />,
  reportsV1: <ToolItem
    key="reports"
    imgSrc={reports}
    title="Client reports"
    description="Generate and share project financial reports with your clients, comparing the pros and cons of funding options. The reports even estimate monthly tenant costs versus landlord costs. These reports were designed by recognized national experts in finance and commercial lease accounting, but you do not need to be an expert to understand them. They are simple to use, take only seconds to generate, and can easily be shared with your clients without any cost or obligation to either you or them."
  />,
  reportsV2: <ToolItem
    key="reports"
    imgSrc={reports}
    title="Client reports"
    description="Generate and share project financial reports, comparing the pros and cons of funding options. The reports even estimate monthly tenant costs versus landlord costs. These reports were designed by recognized national experts in finance and commercial lease accounting, but you do not need to be an expert to understand them. They are simple to use, take only seconds to generate, and can easily be shared with your clients without any cost or obligation to either you or them."
  />,
  reportsV3: <ToolItem
    key="reports"
    imgSrc={reports}
    title="Client reports"
    description="Generate and share project financial reports, comparing the pros and cons of funding options. The reports even estimate monthly cost breakdowns for the tenants and landlord. These reports were designed by recognized national experts in finance and commercial lease accounting, but you do not need to be an expert to understand them. They are simple to use, take only seconds to generate, and can easily be shared with your clients without any cost or obligation to either you or them."
  />,
  leads: <ToolItem
    key="leads"
    imgSrc={manageProjects}
    title="Inbound leads"
    description="We provide you with a simple, personal website for managing leads that you get from ecoAmerica’s Blessed Tomorrow program. You can also use this website to share free financial property reports with your clients that need help finding project financing."
  />,
  leadsV2: <ToolItem
    key="leads"
    imgSrc={manageProjects}
    title="Inbound leads"
    description="We provide you with a simple, personal website for managing leads that you get from ecoAmerica’s Blessed Tomorrow program. You can also use this website to share free financial property reports with your existing clients that need help finding project financing."
  />,
  leadsV3: <ToolItem
    key="leads"
    imgSrc={manageProjects}
    title="Inbound leads"
    description="We provide you with a simple, personal website for managing leads that you get from property owners. You can also use this website to share free financial property reports with your clients that need help finding project financing."
  />,
};

const ContractorTools = ({ version, tools }) => {
  const { title } = getCopy({ version });
  return (
    <section className="contractor-signup__tools">
      <div className="contractor-signup__tools__inner">
        <h2 className="contractor-signup__tools__title">
          <span>{ title }</span>
          Unety makes it easy every step of the way
        </h2>
        <div className="contractor-signup__tools__list">
          {tools.map((toolKey) => TOOL_ITEMS[toolKey])}
        </div>
      </div>
    </section>
  )
};

export default ContractorTools;
