import React from 'react';

import './styles/coming-soon.scss';

const ComingSoonPage = () => {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-page__inner">
        <h1 className="coming-soon-page__title">
          Coming soon
        </h1>
        <div className="coming-soon-page__form"
             dangerouslySetInnerHTML={{
               __html: `<!--[if lte IE 8]>
              <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
              <![endif]-->
              <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
              <script>
                hbspt.forms.create({
                    portalId: "6899614",
                    formId: "66c7f72f-d3ec-44e0-9d2a-d8f435fb1771"
              });
              </script>`
             }}
        />
      </div>
    </div>
  )
}

export default ComingSoonPage;
