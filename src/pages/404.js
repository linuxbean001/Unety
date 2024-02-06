import React, { PureComponent } from 'react'

import './styles/404.scss';

class NotFoundPage extends PureComponent {
  render() {
    return (
      <div className="rp-404">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    )
  }
}

export default NotFoundPage
